import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatsRoutingModule } from './boats-routing.module';

import { GalleryModule } from 'ng-gallery';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { BoatsComponent } from './boats.component';
import { BoatFilterComponent } from './boat-filter/boat-filter.component';
import { BoatMapComponent } from './boat-map/boat-map.component';
import { BoatMapModalComponent } from './boat-map-modal/boat-map-modal.component';
import { BoatsListComponent } from './boats-list/boats-list.component';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { BoatItemComponent } from './boats-list/boat-item/boat-item.component';


@NgModule({
  declarations: [
    BoatsComponent,
    BoatFilterComponent,
    BoatMapComponent,
    BoatMapModalComponent,
    BoatsListComponent,
    BoatItemComponent
  ],
  imports: [
    CommonModule,
    BoatsRoutingModule,
    GalleryModule,
    NgbNavModule,
    LoaderModule
  ]
})
export class BoatsModule { }
