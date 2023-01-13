import { Component, OnInit } from '@angular/core';
import { HousesService } from './houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  showMapRight: boolean = false;
  
  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
    this.housesService.showMapAction$.subscribe(
      (value: boolean) => {
        this.showMapRight = false;

        setTimeout(() => {
          this.showMapRight = value;
        }, 1);
      }
    );
  }
}
