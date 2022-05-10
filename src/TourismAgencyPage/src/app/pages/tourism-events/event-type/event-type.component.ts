import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TourismEventsService } from '../services/tourism-events.service';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.scss']
})
export class EventTypeComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('familyCircle', { static: false }) familyCircle?: ElementRef<HTMLElement>;
  @ViewChild('friendsCircle', { static: false }) friendsCircle?: ElementRef<HTMLElement>;
  @ViewChild('coupleCircle', { static: false }) coupleCircle?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              private tourismEventsService: TourismEventsService) { }

  ngOnInit(): void {
    this.showAnimationOptions();
  }

  onSelectElement(option: number) : void {
    // 1 = Family, 2 = Friends, 3 = Couple

    if(option === 1) {
      this.tourismEventsService.selectedOptions.type = 'Familia';

      this.renderer.removeClass(this.friendsCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.coupleCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.friendsCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.coupleCircle?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.friendsCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.coupleCircle?.nativeElement, 'd-none');
      }, 600);
    } else if(option === 2) {
      this.tourismEventsService.selectedOptions.type = 'Amigos';

      this.renderer.removeClass(this.familyCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.coupleCircle?.nativeElement, 'plan-type-circle-hover');      

      this.renderer.addClass(this.familyCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.coupleCircle?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.familyCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.coupleCircle?.nativeElement, 'd-none');
      }, 600);
    } else {
      this.tourismEventsService.selectedOptions.type = 'Pareja';

      this.renderer.removeClass(this.familyCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.friendsCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.familyCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.friendsCircle?.nativeElement, 'bounce-exit-animation');      

      setTimeout(() => {
        this.renderer.addClass(this.familyCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.friendsCircle?.nativeElement, 'd-none');
      }, 600);
    }

    setTimeout(() => {
        this.changeStep.next(true);
    }, 1000);
  }


  private showAnimationOptions(): void  {
    setTimeout(() => {      
      this.renderer.removeClass(this.familyCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.friendsCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.coupleCircle?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.familyCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.friendsCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.coupleCircle?.nativeElement, 'animation-zoomIn');
    }, 800);
  }

}
