import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destination-map',
  templateUrl: './destination-map.component.html',
  styleUrls: ['./destination-map.component.scss']
})
export class DestinationMapComponent implements OnInit {

  isMapLoading: boolean = true;
  mapUrl: SafeResourceUrl;

  constructor(public destinationsService: DestinationsService,
              private _sanitizer: DomSanitizer) {
                this.mapUrl = this._sanitizer.bypassSecurityTrustResourceUrl(destinationsService.mapUrl);
  }

  ngOnInit(): void {
  }


  onMapLoaded(): void {
    this.isMapLoading = false;
  }

}
