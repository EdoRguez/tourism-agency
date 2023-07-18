import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardElementComponent } from '../../components/card-element/card-element.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CardWideElementComponent } from '../../components/card-wide-element/card-wide-element.component';



@NgModule({
  declarations: [
    CardElementComponent,
    CardWideElementComponent
  ],
  imports: [
    CommonModule, 
    NgbCarouselModule
  ],
  exports: [
    CardElementComponent,
    CardWideElementComponent
  ]
})
export class UiElementsModule { }
