import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ImitationService } from '../core/services/imitation.service';
import { IFloor } from '../core/interfaces/floor.interface';

@Component({
  selector: 'app-imitation',
  templateUrl: './imitation.component.html',
  styleUrls: ['./imitation.component.scss']
})
export class ImitationComponent implements OnInit, OnDestroy {

  floors$: Observable<IFloor[]>;

  constructor(private imitationService: ImitationService) { }

  ngOnInit() {
    this.floors$ = this.imitationService.imitationModel$.pipe(
      map((imitationModel) => imitationModel.floors.reverse())
    );
  }

  ngOnDestroy() {
    this.imitationService.runModel$.next(false);
  }

  runModel() {
    this.imitationService.runModel$.next(true);
  }

}
