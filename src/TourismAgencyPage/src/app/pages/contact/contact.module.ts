import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactSliderComponent } from './contact-slider/contact-slider.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ContactComponent,
    ContactSliderComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgbModule,
    NgbCarouselModule
  ]
})
export class ContactModule { }
