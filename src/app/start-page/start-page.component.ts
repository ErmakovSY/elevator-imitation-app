import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import * as config from './../../config.json';
import { destroySubscribers } from '../shared/utils';

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

  constructor() { }

  ngOnInit() {
    this.initForm();

    this.subscribers.floorCountChange = this.floorCount.valueChanges
      .subscribe((floorCount: number) => this.updateFloorsCount(floorCount));
  }

  ngOnDestroy() {
    destroySubscribers(this.subscribers);
  }

  private initForm() {
    this.form = this.createForm();

    for (let i = 1; i <= config.default.elevator.count; i++) {
      this.elevators.push(this.createElevatorForm());
    }

    for (let i = 1; i <= config.default.flour.count; i++) {
      this.floors.push(this.createFloorForm());
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

  private createFloorForm() {
    return new FormGroup({
      residents: new FormControl(20)
    });
  }

  private updateFloorsCount(count: number) {
    while (this.floors.length !== count) {
      if (count > this.floors.length) {
        this.floors.push(this.createFloorForm());
      } else {
        this.floors.removeAt(this.floors.length - 1);
      }
    }
  }

}
