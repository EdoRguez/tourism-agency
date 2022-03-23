import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan-ship',
  templateUrl: './plan-ship.component.html',
  styleUrls: ['./plan-ship.component.scss']
})
export class PlanShipComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('ship1Circle', { static: false }) ship1Circle?: ElementRef<HTMLElement>;
  @ViewChild('ship2Circle', { static: false }) ship2Circle?: ElementRef<HTMLElement>;
  @ViewChild('ship3Circle', { static: false }) ship3Circle?: ElementRef<HTMLElement>;
  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.showAnimationOptions();
    this.showAnimationButton();
  }

  onSelectElement(option: number) : void {
    // 1 = Already house, 2 = 2 stars, 3 = 3 stars, 4 = 4 stars, 5 = 5 stars

    // if(option === 1) {
    //   this.renderer.removeClass(this.star2Circle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star3Circle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star4Circle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star5Circle?.nativeElement, 'plan-type-circle-hover');

    //   this.renderer.addClass(this.star2Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star3Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star4Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star5Circle?.nativeElement, 'bounce-exit-animation');

    //   setTimeout(() => {
    //     this.renderer.addClass(this.star2Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star3Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star4Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star5Circle?.nativeElement, 'd-none');
    //   }, 600);
    // } else if(option === 2) {
    //   this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star3Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star4Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star5Circle?.nativeElement, 'plan-type-circle-hover');      

    //   this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star3Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star4Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star5Circle?.nativeElement, 'bounce-exit-animation');

    //   setTimeout(() => {
    //     this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star3Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star4Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star5Circle?.nativeElement, 'd-none');
    //   }, 600);
    // } else if(option === 3) {
    //   this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star2Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star4Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star5Circle?.nativeElement, 'plan-type-circle-hover');      

    //   this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star2Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star4Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star5Circle?.nativeElement, 'bounce-exit-animation');

    //   setTimeout(() => {
    //     this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star2Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star4Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star5Circle?.nativeElement, 'd-none');
    //   }, 600);
    // } else if(option === 4) {
    //   this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star2Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star3Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star5Circle?.nativeElement, 'plan-type-circle-hover');      

    //   this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star2Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star3Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star5Circle?.nativeElement, 'bounce-exit-animation');

    //   setTimeout(() => {
    //     this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star2Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star3Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star5Circle?.nativeElement, 'd-none');
    //   }, 600);
    // } else {
    //   this.renderer.removeClass(this.homeCircle?.nativeElement, 'plan-type-circle-hover');
    //   this.renderer.removeClass(this.star2Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star3Circle?.nativeElement, 'plan-type-circle-hover');      
    //   this.renderer.removeClass(this.star4Circle?.nativeElement, 'plan-type-circle-hover');      

    //   this.renderer.addClass(this.homeCircle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star2Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star3Circle?.nativeElement, 'bounce-exit-animation');
    //   this.renderer.addClass(this.star4Circle?.nativeElement, 'bounce-exit-animation');

    //   setTimeout(() => {
    //     this.renderer.addClass(this.homeCircle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star2Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star3Circle?.nativeElement, 'd-none');
    //     this.renderer.addClass(this.star4Circle?.nativeElement, 'd-none');
    //   }, 600);
    // }

    // setTimeout(() => {
    //     this.changeStep.next(true);
    // }, 1000);
  }

  onReturn(): void {
    this.changeStep.next(false);
  }

  private showAnimationOptions(): void  {
    setTimeout(() => {
      this.renderer.removeClass(this.ship1Circle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.ship2Circle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.ship3Circle?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.ship1Circle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.ship2Circle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.ship3Circle?.nativeElement, 'animation-zoomIn');
    }, 800);

  }

  private showAnimationButton(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
    }, 2000);
  }

}
