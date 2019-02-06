import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import * as config from './../../config.json';
import { destroySubscribers } from '../shared/utils';
import { ImitationService } from '../core/services/imitation.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subscribers: any = {};

  get elevatorCount(): FormControl {
    return this.form.controls['elevatorCount'] as FormControl;
  }

  get elevators(): FormArray {
    return this.form.controls['elevators'] as FormArray;
  }

  get floorCount(): FormControl {
    return this.form.controls['floorCount'] as FormControl;
  }

  get floors(): FormArray {
    return this.form.controls['floors'] as FormArray;
  }

  constructor(
    private router: Router,
    private imitationService: ImitationService,
  ) { }

  ngOnInit() {
    this.initForm();

    this.subscribers.floorCountChange = this.floorCount.valueChanges
      .subscribe((floorCount: number) => this.updateFloorsCount(floorCount));

    this.subscribers.elevatorCountChange = this.elevatorCount.valueChanges
      .subscribe((elevatorCount: number) => this.updateElevatorsCount(elevatorCount));

    this.subscribers.imitationModelReady = this.imitationService.imitationModel$
      .subscribe(() => this.router.navigate(['imitation']));
  }

  ngOnDestroy() {
    destroySubscribers(this.subscribers);
  }

  runImitation() {
    this.imitationService.initModel$.next(this.form.value);
  }

  private initForm() {
    this.form = this.createForm();

    for (let i = 1; i <= config.default.elevator.count; i++) {
      this.elevators.push(this.createElevatorForm());
    }

    for (let i = 1; i <= config.default.flour.count; i++) {
      this.floors.push(this.createFloorForm(i));
    }
  }

  private createForm(): FormGroup {
    return new FormGroup({
      elevatorCount: new FormControl(config.default.elevator.count),
      elevators: new FormArray([]),

      floorCount: new FormControl(config.default.flour.count),
      floors: new FormArray([])
    });
  }

  private createElevatorForm() {
    return new FormGroup({
      capacity: new FormControl(5)
    });
  }

  private createFloorForm(floorNumber) {
    return new FormGroup({
      number: new FormControl(floorNumber),
      residents: new FormControl(20)
    });
  }

  private updateFloorsCount(count: number) {
    while (this.floors.length !== count) {
      if (count > this.floors.length) {
        this.floors.push(this.createFloorForm(this.floors.length));
      } else {
        this.floors.removeAt(this.floors.length - 1);
      }
    }
  }

  private updateElevatorsCount(count: number) {
    while (this.elevators.length !== count) {
      if (count > this.elevators.length) {
        this.elevators.push(this.createElevatorForm());
      } else {
        this.elevators.removeAt(this.elevators.length - 1);
      }
    }
  }

}
