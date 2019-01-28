import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return new FormGroup({
      elevatorNumber: new FormControl(1),
      elevators: new FormArray([]),

      floorNumber: new FormControl(9),
      floors: new FormArray([])
    });
  }

}
