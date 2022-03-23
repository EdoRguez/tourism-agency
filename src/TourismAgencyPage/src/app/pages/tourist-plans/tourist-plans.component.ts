import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourist-plans',
  templateUrl: './tourist-plans.component.html',
  styleUrls: ['./tourist-plans.component.scss']
})
export class TouristPlansComponent implements OnInit {

  formStep: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDetectChangeStep(value: boolean) : void {
    value ? this.formStep++ : this.formStep--;
  }

}
