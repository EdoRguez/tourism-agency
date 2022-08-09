import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boat-map',
  templateUrl: './boat-map.component.html',
  styleUrls: ['./boat-map.component.scss']
})
export class BoatMapComponent implements OnInit {

  isMapLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMapLoaded(): void {
    this.isMapLoading = false;
  }

}
