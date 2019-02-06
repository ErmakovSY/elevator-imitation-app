import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ImitationComponent } from './imitation.component';
import { ImitationRoutingModule } from './imitation-routing.module';
import { FloorModule } from './floor/floor.module';

@NgModule({
  imports: [
    SharedModule,
    ImitationRoutingModule,
    FloorModule,
  ],
  exports: [ImitationComponent],
  declarations: [ImitationComponent]
})
export class ImitationModule { }
