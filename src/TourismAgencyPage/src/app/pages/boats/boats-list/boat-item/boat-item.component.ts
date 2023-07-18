import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { BoatMapComponent } from '../../boat-map/boat-map.component';
import { BoatsService } from '../../boats.service';
import { Constants } from 'src/app/core/constants/contants';
import { BoatMapModalComponent } from '../../boat-map-modal/boat-map-modal.component';

@Component({
    selector: 'app-boat-item',
    templateUrl: './boat-item.component.html',
    styleUrls: ['./boat-item.component.scss'],
})
export class BoatItemComponent {
    @Input() boat: any;

    images: GalleryItem[] = [];

    constructor(
        private _boatService: BoatsService,
        private modalService: NgbModal
    ) {}

    onToggleMap(mapType: string): void {
        if(mapType === Constants.MapComputer) {
            this._boatService.mapUrl = this.boat.googleMapLocation;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
            this._boatService.toggleMap(true);
        } else {
            this._boatService.mapUrl = this.boat.googleMapLocation;
            const modalRef = this.modalService.open(BoatMapModalComponent);
        }
    }
}
