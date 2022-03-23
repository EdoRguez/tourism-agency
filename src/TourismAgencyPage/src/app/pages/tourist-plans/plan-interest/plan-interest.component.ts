import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan-interest',
  templateUrl: './plan-interest.component.html',
  styleUrls: ['./plan-interest.component.scss']
})
export class PlanInterestComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('beachCircle', { static: false }) beachCircle?: ElementRef<HTMLElement>;
  @ViewChild('natureCircle', { static: false }) natureCircle?: ElementRef<HTMLElement>;
  @ViewChild('cultureCircle', { static: false }) cultureCircle?: ElementRef<HTMLElement>;
  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.showAnimationOptions();
    this.showAnimationButton();
  }

  onSelectElement(option: number) : void {
    // 1 = Beach, 2 = Nature, 3 = Culture

    if(option === 1) {
      this.renderer.removeClass(this.natureCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.cultureCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.natureCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.cultureCircle?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.natureCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.cultureCircle?.nativeElement, 'd-none');
      }, 600);
    } else if(option === 2) {
      this.renderer.removeClass(this.beachCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.cultureCircle?.nativeElement, 'plan-type-circle-hover');      

      this.renderer.addClass(this.beachCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.cultureCircle?.nativeElement, 'bounce-exit-animation');

      setTimeout(() => {
        this.renderer.addClass(this.beachCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.cultureCircle?.nativeElement, 'd-none');
      }, 600);
    } else {
      this.renderer.removeClass(this.beachCircle?.nativeElement, 'plan-type-circle-hover');
      this.renderer.removeClass(this.natureCircle?.nativeElement, 'plan-type-circle-hover');

      this.renderer.addClass(this.beachCircle?.nativeElement, 'bounce-exit-animation');
      this.renderer.addClass(this.natureCircle?.nativeElement, 'bounce-exit-animation');      

      setTimeout(() => {
        this.renderer.addClass(this.beachCircle?.nativeElement, 'd-none');
        this.renderer.addClass(this.natureCircle?.nativeElement, 'd-none');
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
      this.renderer.removeClass(this.beachCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.natureCircle?.nativeElement, 'd-none');
      this.renderer.removeClass(this.cultureCircle?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.beachCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.natureCircle?.nativeElement, 'animation-zoomIn');
      this.renderer.addClass(this.cultureCircle?.nativeElement, 'animation-zoomIn');
    }, 800);

  }

  private showAnimationButton(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
  
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
    }, 2000);
  }

}
