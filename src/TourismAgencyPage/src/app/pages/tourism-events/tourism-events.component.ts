import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourism-events',
  templateUrl: './tourism-events.component.html',
  styleUrls: ['./tourism-events.component.scss']
})
export class TourismEventsComponent implements OnInit {

  formStep: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDetectChangeStep(value: boolean) : void {
    value ? this.formStep++ : this.formStep--;
  }

}
