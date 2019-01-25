import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    PageModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
