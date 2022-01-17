import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations.component';
import { DestinationFilterComponent } from './destination-filter/destination-filter.component';


@NgModule({
  declarations: [
    DestinationsComponent,
    DestinationFilterComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule
  ]
})
export class DestinationsModule { }
