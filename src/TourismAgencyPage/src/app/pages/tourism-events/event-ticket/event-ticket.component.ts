import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TourismEventsService } from '../services/tourism-events.service';

@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.scss']
})
export class EventTicketComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('vipCircle', { static: false }) vipCircle?: ElementRef<HTMLElement>;
  @ViewChild('generalCircle', { static: false }) generalCircle?: ElementRef<HTMLElement>;

  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              private tourismEventsService: TourismEventsService) { }

  ngOnInit(): void {
    this.showAnimationOptions();
  }

  onSelectElement(option: number) : void {
    // 1 = vip, 2 = general

    if(option === 1) {
      this.tourismEventsService.selectedOptions.ticket = 'VIP';

      this.renderer.removeClass(this.vipCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.generalCircle?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.generalCircle?.nativeElement, 'd-none');
      }, 600);
    } else {
      this.tourismEventsService.selectedOptions.ticket = 'General';

      this.renderer.removeClass(this.generalCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.vipCircle?.nativeElement, 'bounce-exit-animation');     

      setTimeout(() => {
        this.renderer.addClass(this.vipCircle?.nativeElement, 'd-none');
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
      this.renderer.removeClass(this.vipCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.generalCircle?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.vipCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.generalCircle?.nativeElement, 'animation-zoomIn');
    }, 800);

    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
    }, 2000);
  }
}
