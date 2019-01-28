import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ImitationModule } from './imitation/imitation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    ImitationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
