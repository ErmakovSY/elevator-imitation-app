import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StartPageComponent } from './start-page.component';

@NgModule({
  imports: [SharedModule],
  exports: [StartPageComponent],
  declarations: [StartPageComponent]
})
export class StartPageModule { }
