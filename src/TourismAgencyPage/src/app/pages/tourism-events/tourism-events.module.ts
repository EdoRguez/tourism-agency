import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TourismEventsRoutingModule } from './tourism-events-routing.module';
import { TourismEventsComponent } from './tourism-events.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { EventNumberPeopleComponent } from './event-number-people/event-number-people.component';
import { FormsModule } from '@angular/forms';
import { EventTicketComponent } from './event-ticket/event-ticket.component';
import { EventLodgingComponent } from './event-lodging/event-lodging.component';
import { EventDateComponent } from './event-date/event-date.component';
import { EventFullDayComponent } from './event-full-day/event-full-day.component';
import { EventNightComponent } from './event-night/event-night.component';
import { EventResultComponent } from './event-result/event-result.component';


@NgModule({
  declarations: [
    TourismEventsComponent,
    EventTypeComponent,
    EventNumberPeopleComponent,
    EventTicketComponent,
    EventLodgingComponent,
    EventDateComponent,
    EventFullDayComponent,
    EventNightComponent,
    EventResultComponent
  ],
  imports: [
    CommonModule,
    TourismEventsRoutingModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class TourismEventsModule { }
