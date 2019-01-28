import { sortBy, uniq } from 'lodash';

import { IElevator } from '../interfaces/elevator.interface';
import { ElevatorStatus } from '../types/elevator/elevator-status';
import { ElevatorDoorStatus } from '../types/elevator/elevator-door-status';

export class Elevator implements IElevator {

  capacity: number;
  passengers: number;
  freePlaces: number;
  status: ElevatorStatus;
  doorStatus: ElevatorDoorStatus;
  targetFloors: number[] = [];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.status = ElevatorStatus.WAITING;
  }

  updateLoad(passengers: number): void {
    this.passengers = passengers;
    this.freePlaces = this.capacity - this.passengers;
  }

  updateStatus(status: ElevatorStatus): void {
    this.status = status;
  }

  updateDoorStatus(status: ElevatorDoorStatus): void {
    this.doorStatus = status;
  }

  addTargetFloor(floor: number) {
    this.targetFloors = sortBy(uniq([...this.targetFloors, floor]));
  }

}