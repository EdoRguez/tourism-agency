import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesListComponent } from './houses-list/houses-list.component';
import { HouseMapModalComponent } from './house-map-modal/house-map-modal.component';
import { HouseMapComponent } from './house-map/house-map.component';
import { HouseFilterComponent } from './house-filter/house-filter.component';
import { HouseItemComponent } from './houses-list/house-item/house-item.component';
import { HousesComponent } from './houses.component';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { GalleryModule } from 'ng-gallery';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HousesListComponent,
    HouseMapModalComponent,
    HouseMapComponent,
    HouseFilterComponent,
    HouseItemComponent,
    HousesComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    GalleryModule,
    LoaderModule,
    NgbNavModule,
    RouterModule
  ]
})
export class HousesModule { }
