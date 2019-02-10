import { ImitationOptions } from '../interfaces/imitation-options.interface';
import { IElevator } from '../interfaces/elevator.interface';
import { IFloor } from '../interfaces/floor.interface';

import { Observable, of, Subject } from 'rxjs';
import { delay, mergeMap, repeat, share, switchMapTo } from 'rxjs/operators';

import * as config from '../../../config.json';
import { getRandomValue } from '../../shared/utils';

import { Floor } from './floor';
import { Elevator } from './elevator';

export class Imitation implements ImitationOptions {

  elevators: IElevator[];
  floors: IFloor[];

  ticks$: Observable<any>;
  triggerTickGeneration$: Subject<null> = new Subject();

  constructor({ elevators, floors }) {
    this.floors = this.populateFloors(floors);
    this.elevators = this.populateElevators(elevators);

    this.ticks$ = this.triggerTickGeneration$.pipe(
      switchMapTo(of(null).pipe(
        mergeMap(() => of(null).pipe(
          delay(getRandomValue(config['tickTime'], config['tickTimeDelta']))
        )),
        repeat(),
        share()
      ))
    );
  }

  run() {
    this.triggerTickGeneration$.next();
  }

  private populateFloors(floors) {
    if (floors && floors.length) {
      return floors.map(floor => new Floor(floor));
    }
    return [];
  }

  private populateElevators(elevators) {
    if (elevators && elevators.length) {
      return elevators.map(elevator => new Elevator(elevator));
    }
    return [];
  }
}
