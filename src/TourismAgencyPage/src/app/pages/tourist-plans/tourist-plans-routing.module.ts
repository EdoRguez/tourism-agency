import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouristPlansComponent } from './tourist-plans.component';

const routes: Routes = [
  { path: '', component: TouristPlansComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristPlansRoutingModule { }
