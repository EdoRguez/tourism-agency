import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plan-number-people',
  templateUrl: './plan-number-people.component.html',
  styleUrls: ['./plan-number-people.component.scss']
})
export class PlanNumberPeopleComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  arrayNumberPeople: number[] = [];
  selectedNumberPeople: any;
  showNextBtn: boolean = false;

  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {
    this.arrayNumberPeople = Array(20).fill(0).map((x,i)=>i+1);
  }

  ngOnInit(): void {
    this.showAnimationButton();
  }

  onNext(): void  {
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
