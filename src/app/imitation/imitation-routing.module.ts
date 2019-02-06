import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImitationComponent } from './imitation.component';

const routes: Routes = [
  { path: '', component: ImitationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImitationRoutingModule { }
