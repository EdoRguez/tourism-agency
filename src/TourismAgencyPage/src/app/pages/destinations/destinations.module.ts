import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';

import { GalleryModule } from  'ng-gallery';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { DestinationsComponent } from './destinations.component';
import { DestinationFilterComponent } from './destination-filter/destination-filter.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { DestinationItemComponent } from './destinations-list/destination-item/destination-item.component';
import { DestinationMapComponent } from './destination-map/destination-map.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { DestinationMapModalComponent } from './destination-map-modal/destination-map-modal.component';


@NgModule({
  declarations: [
    DestinationsComponent,
    DestinationFilterComponent,
    DestinationsListComponent,
    DestinationItemComponent,
    DestinationMapComponent,
    LoaderComponent,
    DestinationMapModalComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    GalleryModule,
    NgbNavModule
  ]
})
export class DestinationsModule { }
