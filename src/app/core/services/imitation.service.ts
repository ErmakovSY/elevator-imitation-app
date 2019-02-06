import { Injectable } from '@angular/core';

import { combineLatest, ConnectableObservable, Subject } from 'rxjs';
import { map, publishReplay } from 'rxjs/operators';

import { ImitationOptions } from '../interfaces/imitation-options.interface';
import { Imitation } from '../models/imitation';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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
      map(([options, run]: [Imitation, boolean]) => {
        const model = new Imitation(options);
        if (run) {
          model.run();
        }
        return model;
      }),
        publishReplay(1)
    ) as ConnectableObservable<any>;
    this.imitationModel$.connect();
  }
}
