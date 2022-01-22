import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-map',
  templateUrl: './destination-map.component.html',
  styleUrls: ['./destination-map.component.scss']
})
export class DestinationMapComponent implements OnInit {

  isMapLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMapLoaded(): void {
    this.isMapLoading = false;
  }

}
