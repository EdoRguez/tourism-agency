import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristPlansRoutingModule } from './tourist-plans-routing.module';
import { TouristPlansComponent } from './tourist-plans.component';
import { PlanTypeComponent } from './plan-type/plan-type.component';
import { PlanInterestComponent } from './plan-interest/plan-interest.component';
import { PlanNumberPeopleComponent } from './plan-number-people/plan-number-people.component';
import { FormsModule } from '@angular/forms';
import { PlanDateComponent } from './plan-date/plan-date.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanAccommodationComponent } from './plan-accommodation/plan-accommodation.component';
import { PlanShipComponent } from './plan-ship/plan-ship.component';


@NgModule({
  declarations: [
    TouristPlansComponent,
    PlanTypeComponent,
    PlanInterestComponent,
    PlanNumberPeopleComponent,
    PlanDateComponent,
    PlanAccommodationComponent,
    PlanShipComponent
  ],
  imports: [
    CommonModule,
    TouristPlansRoutingModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class TouristPlansModule { }
