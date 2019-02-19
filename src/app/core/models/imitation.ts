import { ImitationOptions } from '../interfaces/imitation-options.interface';
import { IElevator } from '../interfaces/elevator.interface';
import { IFloor } from '../interfaces/floor.interface';

import { ConnectableObservable, merge, Observable, of, Subject } from 'rxjs';
import { delay, map, mapTo, mergeMap, publishReplay, repeat, share, switchMapTo, tap } from 'rxjs/operators';

import * as config from '../../../config.json';
import { getRandomValue, getRandomValueInRange } from '../../shared/utils';

import { Floor } from './floor';
import { Elevator } from './elevator';
import { IResident } from '../interfaces/resident.interface';

export class Imitation implements ImitationOptions {

  elevators: IElevator[];
  floors: IFloor[];

  events$: ConnectableObservable<Imitation>;

  ticks$: Observable<null>;
  triggerTickGeneration$: Subject<null> = new Subject();

  residentsEvents$: Observable<any>;

  isModelRunning: boolean;

  constructor({ elevators, floors }) {
    this.floors = this.populateFloors(floors);
    this.elevators = this.populateElevators(elevators);

    this.ticks$ = this.triggerTickGeneration$.pipe(
      switchMapTo(of(null).pipe(
        mergeMap(() => of(null).pipe(
          delay(getRandomValue(config.default.tickTime, config.default.tickTimeDelta))
        )),
        repeat(),
        share()
      ))
    );

    this.residentsEvents$ = this.ticks$.pipe(
      map(() => this.floors.reduce((acc, floor) => [...acc, ...floor.residents], [])),
      map((residents: IResident[]) =>
        residents[getRandomValueInRange(0, residents.length)]
      ),
      tap((resident: IResident) => resident.triggerResidentEvent())
    );

    this.events$ = merge(
      this.residentsEvents$
    ).pipe(
      mapTo(this),
      publishReplay(1)
    ) as ConnectableObservable<Imitation>;
    this.events$.connect();
  }

  run() {
    this.isModelRunning = true;
    this.triggerTickGeneration$.next();
  }

  private populateFloors(floors) {
    if (floors && floors.length) {
      return floors.map(floor => new Floor(floor)).reverse();
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
