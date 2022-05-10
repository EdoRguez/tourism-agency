import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TourismEvent } from '../interfaces/tourism-event.interface';
import { TourismEventsService } from '../services/tourism-events.service';
import { ResultDates } from './interfaces/result-dates.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-event-result',
  templateUrl: './event-result.component.html',
  styleUrls: ['./event-result.component.scss']
})
export class EventResultComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();
  selectedResults!: TourismEvent;
  
  resultDates!: ResultDates; 

  constructor(private tourismEventsService: TourismEventsService) { 
    
  }

  ngOnInit(): void {
    this.transformResultDate();

    this.selectedResults = this.tourismEventsService.selectedOptions;
  }

  onReturn(): void {
    this.changeStep.next(false);
  }

  private transformResultDate() {
    this.resultDates = {
      initDate: null,
      endDate: null
    }

    if(this.tourismEventsService.selectedOptions.initDate) {
      this.resultDates.initDate = moment(this.tourismEventsService.selectedOptions.initDate).format('DD/MM/YYYY');
    }

    if(this.tourismEventsService.selectedOptions.endDate) {
      this.resultDates.endDate = moment(this.tourismEventsService.selectedOptions.endDate).format('DD/MM/YYYY');
    }
  }


}
