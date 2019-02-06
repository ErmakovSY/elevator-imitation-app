import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IFloor } from '../../core/interfaces/floor.interface';
import { IResident } from '../../core/interfaces/resident.interface';
import { ImitationService } from '../../core/services/imitation.service';
import { ResidentStatus } from '../../core/types/resident/resident-status';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  residents$: Observable<IResident[]>;
  residentsOnResidenceFloor$: Observable<IResident[]>;
  residentsWaiting$: Observable<IResident[]>;

  @Input() floor: IFloor;

  constructor(private imitationService: ImitationService) { }

  ngOnInit() {
    this.residents$ = this.imitationService.imitationModel$.pipe(
      map((imitationModel) => {
        const floor = imitationModel.floors.find(f => f.number === this.floor.number);
        return floor.residents;
      })
    );

    this.residentsOnResidenceFloor$ = this.residents$.pipe(
      map((residents) =>
        residents.filter(resident => resident.status === ResidentStatus.ON_RESIDENCE_FLOOR)
      )
    );

    this.residentsWaiting$ = this.residents$.pipe(
      map((residents) =>
        residents.filter(resident => resident.status === ResidentStatus.WAITING)
      )
    );
  }

}
