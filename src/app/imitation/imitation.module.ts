import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ImitationComponent } from './imitation.component';
import { ImitationRoutingModule } from './imitation-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ImitationRoutingModule,
  ],
  exports: [ImitationComponent],
  declarations: [ImitationComponent]
})
export class ImitationModule { }
