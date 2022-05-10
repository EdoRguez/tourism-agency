import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourismEventsComponent } from './tourism-events.component';

const routes: Routes = [
  { path: '', component: TourismEventsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismEventsRoutingModule { }
