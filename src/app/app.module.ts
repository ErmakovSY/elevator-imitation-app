import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { StartPageModule } from './start-page/start-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    StartPageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
