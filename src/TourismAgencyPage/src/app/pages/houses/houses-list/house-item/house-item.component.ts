import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { HouseMapModalComponent } from '../../house-map-modal/house-map-modal.component';
import { HousesService } from '../../houses.service';
import { Constants } from 'src/app/core/constants/contants';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.scss']
})
export class HouseItemComponent {
    @Input() house: any;

    isCardOpened: boolean = false;

    activeTab = 1;
    images: GalleryItem[] = [];

    constructor(
        private houseService: HousesService,
        private modalService: NgbModal
    ) {}

    onToggleMap(mapType: string): void {
        if(mapType === Constants.MapComputer) {
            this.houseService.mapUrl = this.house.googleMapLocation;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
            this.houseService.toggleMap(true);
        } else {
            this.houseService.mapUrl = this.house.googleMapLocation;
            const modalRef = this.modalService.open(HouseMapModalComponent);
        }
    }
}
