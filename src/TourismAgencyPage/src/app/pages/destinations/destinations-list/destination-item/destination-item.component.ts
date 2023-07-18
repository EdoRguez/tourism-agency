import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  GalleryItem, ImageItem } from 'ng-gallery';
import { DestinationMapModalComponent } from '../../destination-map-modal/destination-map-modal.component';
import { DestinationsService } from '../../destinations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/contants';

@Component({
    selector: 'app-destination-item',
    templateUrl: './destination-item.component.html',
    styleUrls: ['./destination-item.component.scss'],
})
export class DestinationItemComponent {
    @Input() destination: any;

    images: GalleryItem[] = [];

    constructor(
        private _destinationService: DestinationsService,
        private modalService: NgbModal
    ) {}


    onToggleMap(mapType: string): void {
        if(mapType === Constants.MapComputer) {
            this._destinationService.mapUrl = this.destination.googleMapLocation;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
            this._destinationService.toggleMap(true);
        } else {
            this._destinationService.mapUrl = this.destination.googleMapLocation;
            const modalRef = this.modalService.open(DestinationMapModalComponent);
        }
    }
}
