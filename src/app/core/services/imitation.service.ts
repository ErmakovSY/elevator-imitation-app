import { Injectable } from '@angular/core';

import { combineLatest, ConnectableObservable, Subject } from 'rxjs';
import { publishReplay, scan, switchMap } from 'rxjs/operators';

import { ImitationOptions } from '../interfaces/imitation-options.interface';
import { Imitation } from '../models/imitation';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ImitationService {

  imitationModel$: ConnectableObservable<any>;
  initModel$: Subject<ImitationOptions> = new Subject();
  runModel$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.imitationModel$ = combineLatest(
      this.initModel$,
      this.runModel$
    ).pipe(
      scan((model: Imitation, [options, run]: [Imitation, boolean]) => {
        if (run) {
          model.run();
          return model;
        }
        return new Imitation(options);
      }, {}),
      switchMap((model: Imitation) => model.isModelRunning ? model.events$ : of(model)),
      publishReplay(1)
    ) as ConnectableObservable<any>;
    this.imitationModel$.connect();
  }
}
