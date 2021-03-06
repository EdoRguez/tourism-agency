import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './shared/components/header/header.component';
import { TouristPlansModule } from './pages/tourist-plans/tourist-plans.module';
import { TourismEventsModule } from './pages/tourism-events/tourism-events.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDropdownModule,
    TouristPlansModule,
    TourismEventsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
