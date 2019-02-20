import { range, Subject } from 'rxjs';

import { max } from 'lodash';

import * as config from '../../../config.json';
import { IElevator } from '../interfaces/elevator.interface';
import { ElevatorStatus } from '../types/elevator/elevator-status';
import { ElevatorDoorStatus } from '../types/elevator/elevator-door-status';
import { concatMap, delay, filter, finalize, mergeMap, scan, switchMap, tap } from 'rxjs/operators';

export class Elevator implements IElevator {

  capacity: number;
  passengers = 0;
  freePlaces: number;
  status: ElevatorStatus;
  doorStatus: ElevatorDoorStatus;
  targetFloors: number[] = [];
  currentFloor = 1;

  private incomingCalls$: Subject<number[]> = new Subject();

  constructor({ capacity }) {
    this.capacity = capacity;
    this.freePlaces = capacity;
    this.status = ElevatorStatus.FREE;

    this.incomingCalls$.pipe(
      scan((acc: number, calls: number[]) => {
        if (this.status === ElevatorStatus.FREE) {
          console.log(555, calls, max(calls))
          return max(calls);
        }
        return acc;
      }),
      filter(() => this.status === ElevatorStatus.FREE),
      switchMap(floor => this.moveElevator(floor))
    ).subscribe(floorNumber => console.log(111, floorNumber));
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

  addCallFloors(floors: number[]) {
    this.incomingCalls$.next(floors);
  }

  private moveElevator(targetFloor: number) {
    console.log('MOVE', this.currentFloor, '->', targetFloor);
    // TODO: fix sequence
    return range(this.currentFloor, targetFloor).pipe(
      tap(() => this.status = ElevatorStatus.MOVING),
      delay(config.default.elevator.speed),
      tap(floorNumber => this.currentFloor = floorNumber),
      tap(() => console.log(333, this.currentFloor)),
      finalize(() => this.status = ElevatorStatus.FREE)
    );
  }

}
