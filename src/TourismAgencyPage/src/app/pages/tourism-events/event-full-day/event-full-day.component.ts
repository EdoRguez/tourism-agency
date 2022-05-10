import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TourismEventsService } from '../services/tourism-events.service';

@Component({
  selector: 'app-event-full-day',
  templateUrl: './event-full-day.component.html',
  styleUrls: ['./event-full-day.component.scss']
})
export class EventFullDayComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('plan1', { static: false }) plan1?: ElementRef<HTMLElement>;
  @ViewChild('plan2', { static: false }) plan2?: ElementRef<HTMLElement>;
  @ViewChild('dontLike', { static: false }) dontLike?: ElementRef<HTMLElement>;
  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              private tourismEventsService: TourismEventsService) { }

  ngOnInit(): void {
    this.showAnimationOptions();
    this.showAnimationButton();
  }

  onSelectElement(option: number) : void {
    // 1 = Plan 1, 2 = Plan 2

    if(option === 1) {
      this.tourismEventsService.selectedOptions.fullday = 'Sombrero';

      this.renderer.removeClass(this.plan2?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.dontLike?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.plan2?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.dontLike?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.plan2?.nativeElement, 'd-none');
        this.renderer.addClass(this.dontLike?.nativeElement, 'd-none');
      }, 600);
    } else if(option === 2) {
      this.tourismEventsService.selectedOptions.fullday = 'Punta Brava';

      this.renderer.removeClass(this.plan1?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.dontLike?.nativeElement, 'plan-type-circle-hover');  

      this.renderer.addClass(this.plan1?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.dontLike?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.plan1?.nativeElement, 'd-none');
        this.renderer.addClass(this.dontLike?.nativeElement, 'd-none');
      }, 600);
    } else {
      this.tourismEventsService.selectedOptions.fullday = 'No me gusta la playa';

      this.renderer.removeClass(this.plan1?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.plan2?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.plan1?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.plan2?.nativeElement, 'bounce-exit-animation');      

      setTimeout(() => {
        this.renderer.addClass(this.plan1?.nativeElement, 'd-none');
        this.renderer.addClass(this.plan2?.nativeElement, 'd-none');
      }, 600);
    }

    setTimeout(() => {
        this.changeStep.next(true);
    }, 1000);
  }

  onReturn(): void {
    this.changeStep.next(false);
  }

  private showAnimationOptions(): void  {
    setTimeout(() => {
      this.renderer.removeClass(this.plan1?.nativeElement, 'd-none');
      this.renderer.removeClass(this.plan2?.nativeElement, 'd-none');
      this.renderer.removeClass(this.dontLike?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.plan1?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.plan2?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.dontLike?.nativeElement, 'animation-zoomIn');
    }, 800);

  }

  private showAnimationButton(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
    }, 2000);
  }

}
