import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TourismEventsService } from '../services/tourism-events.service';

@Component({
  selector: 'app-event-night',
  templateUrl: './event-night.component.html',
  styleUrls: ['./event-night.component.scss']
})
export class EventNightComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('dinnerNight', { static: false }) dinnerNight?: ElementRef<HTMLElement>;
  @ViewChild('dontLike', { static: false }) dontLike?: ElementRef<HTMLElement>;
  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              private tourismEventsService: TourismEventsService) { }

  ngOnInit(): void {
    this.showAnimationOptions();
    this.showAnimationButton();
  }

  onSelectElement(option: number) : void {
    // 1 = Cena

    if(option === 1) {
      this.tourismEventsService.selectedOptions.night = 'Cena';

      this.renderer.removeClass(this.dontLike?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.dontLike?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.dontLike?.nativeElement, 'd-none');
      }, 600);
    } else {
      this.tourismEventsService.selectedOptions.night = 'No me gusta la cena';

      this.renderer.removeClass(this.dinnerNight?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.dinnerNight?.nativeElement, 'bounce-exit-animation');      

      setTimeout(() => {
        this.renderer.addClass(this.dinnerNight?.nativeElement, 'd-none');
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
      this.renderer.removeClass(this.dinnerNight?.nativeElement, 'd-none');
      this.renderer.removeClass(this.dontLike?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.dinnerNight?.nativeElement, 'animation-zoomIn');
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
