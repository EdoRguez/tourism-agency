import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HousesService } from '../houses.service';

@Component({
    selector: 'app-house-map',
    templateUrl: './house-map.component.html',
    styleUrls: ['./house-map.component.scss'],
})
export class HouseMapComponent implements OnInit {
    isMapLoading: boolean = true;
    mapUrl: SafeResourceUrl;

    constructor(
        public housesService: HousesService,
        private _sanitizer: DomSanitizer
    ) {
        this.mapUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
            housesService.mapUrl
        );
    }

    ngOnInit(): void {}

    onMapLoaded(): void {
        this.isMapLoading = false;
    }
}
