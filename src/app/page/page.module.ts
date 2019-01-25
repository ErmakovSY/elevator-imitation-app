import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PageComponent } from './page.component';

@NgModule({
  imports: [SharedModule],
  exports: [PageComponent],
  declarations: [PageComponent]
})
export class PageModule { }
