import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ImitationComponent } from './imitation.component';

@NgModule({
  imports: [SharedModule],
  exports: [ImitationComponent],
  declarations: [ImitationComponent]
})
export class ImitationModule { }
