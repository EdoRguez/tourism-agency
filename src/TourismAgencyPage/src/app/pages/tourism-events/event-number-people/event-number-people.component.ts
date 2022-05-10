import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TourismEventsService } from '../services/tourism-events.service';

@Component({
  selector: 'app-event-number-people',
  templateUrl: './event-number-people.component.html',
  styleUrls: ['./event-number-people.component.scss']
})
export class EventNumberPeopleComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  arrayNumberPeople: number[] = [];
  selectedNumberPeople: any;
  showNextBtn: boolean = false;

  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              private tourismEventsService: TourismEventsService) {
    this.arrayNumberPeople = Array(20).fill(0).map((x,i)=>i+1);
  }

  ngOnInit(): void {
    this.showAnimationButton();
  }

  onNext(): void  {
    this.tourismEventsService.selectedOptions.numberPeople = this.selectedNumberPeople;
    this.changeStep.next(true);
  }

  onReturn(): void {
    this.changeStep.next(false);
  }

  private showAnimationButton(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
      this.showNextBtn = true;
    }, 2000);
  }

}
