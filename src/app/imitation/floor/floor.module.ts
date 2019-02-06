import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { FloorComponent } from './floor.component';

@NgModule({
  imports: [SharedModule],
  exports: [FloorComponent],
  declarations: [FloorComponent]
})
export class FloorModule { }
