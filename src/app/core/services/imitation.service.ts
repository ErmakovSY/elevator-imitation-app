import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ImitationOptions } from '../interfaces/imitation-options.interface';
import { Imitation } from '../models/imitation';

@Injectable({
  providedIn: 'root'
})
export class ImitationService {

  imitationModel$: Observable<any>;
  initModel$: Subject<ImitationOptions> = new Subject();

  constructor() {
    this.imitationModel$ = this.initModel$.pipe(
      map((options) => new Imitation(options)),
      shareReplay(1)
    );
  }
}
