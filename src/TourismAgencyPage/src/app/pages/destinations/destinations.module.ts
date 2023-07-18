import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { DestinationsComponent } from './destinations.component';
import { DestinationFilterComponent } from './destination-filter/destination-filter.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { DestinationItemComponent } from './destinations-list/destination-item/destination-item.component';
import { DestinationMapComponent } from './destination-map/destination-map.component';
import { DestinationMapModalComponent } from './destination-map-modal/destination-map-modal.component';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { RouterModule } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { UiElementsModule } from 'src/app/shared/modules/ui-elements/ui-elements.module';


@NgModule({
  declarations: [
    DestinationsComponent,
    DestinationFilterComponent,
    DestinationsListComponent,
    DestinationItemComponent,
    DestinationMapComponent,
    DestinationMapModalComponent,
    DestinationComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    GalleryModule,
    NgbNavModule,
    LightboxModule,
    LoaderModule,
    RouterModule,
    UiElementsModule
  ]
})
export class DestinationsModule { }
