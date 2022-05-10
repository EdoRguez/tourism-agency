import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TourismEventsService } from '../services/tourism-events.service';

@Component({
  selector: 'app-event-lodging',
  templateUrl: './event-lodging.component.html',
  styleUrls: ['./event-lodging.component.scss']
})
export class EventLodgingComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('castleCircle', { static: false }) castleCircle?: ElementRef<HTMLElement>;
  @ViewChild('bigHouseCircle', { static: false }) bigHouseCircle?: ElementRef<HTMLElement>;
  @ViewChild('homeCircle', { static: false }) homeCircle?: ElementRef<HTMLElement>;
  @ViewChild('alreadyLodging', { static: false }) alreadyLodging?: ElementRef<HTMLElement>;
  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              private tourismEventsService: TourismEventsService) { }

  ngOnInit(): void {
    this.showAnimationOptions();
    this.showAnimationButton();
  }

  onSelectElement(option: number) : void {
    // 1 = Elite, 2 = premium, 3 = estandar

    if(option === 1) {
      this.tourismEventsService.selectedOptions.logding = 'Élite';

      this.renderer.removeClass(this.bigHouseCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.alreadyLodging?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.alreadyLodging?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.alreadyLodging?.nativeElement, 'd-none');
      }, 600);
    } else if(option === 2) {
      this.tourismEventsService.selectedOptions.logding = 'Premium';

      this.renderer.removeClass(this.castleCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');  
      this.renderer.removeClass(this.alreadyLodging?.nativeElement, 'plan-type-circle-hover');  

      this.renderer.addClass(this.castleCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.alreadyLodging?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.castleCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.alreadyLodging?.nativeElement, 'd-none');
      }, 600);
    } else if(option === 3) {
      this.tourismEventsService.selectedOptions.logding = 'Estándar';

      this.renderer.removeClass(this.castleCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.bigHouseCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.alreadyLodging?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.castleCircle?.nativeElement, 'bounce-exit-animation');      
      this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.alreadyLodging?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.castleCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.alreadyLodging?.nativeElement, 'd-none');
      }, 600);
    } else {
      this.tourismEventsService.selectedOptions.logding = 'Tengo alojamiento';

      this.renderer.removeClass(this.castleCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.bigHouseCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.castleCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');      

      setTimeout(() => {
        this.renderer.addClass(this.castleCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
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
      this.renderer.removeClass(this.castleCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.bigHouseCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.homeCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.alreadyLodging?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.castleCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.bigHouseCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.homeCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.alreadyLodging?.nativeElement, 'animation-zoomIn');
    }, 800);

  }

  private showAnimationButton(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
    }, 2000);
  }

}
