import { Component, Input, OnInit } from '@angular/core';

import { IFloor } from '../../core/interfaces/floor.interface';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  @Input() floor: IFloor;

  constructor() { }

  ngOnInit() {

  }

}
