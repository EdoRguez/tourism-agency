import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { HouseMapModalComponent } from '../../house-map-modal/house-map-modal.component';
import { HousesService } from '../../houses.service';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.scss']
})
export class HouseItemComponent implements OnInit {
    @Input() house: any;

    isCardOpened: boolean = false;

    activeTab = 1;
    images: GalleryItem[] = [];

    constructor(
        private houseService: HousesService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        for (let i = 0; i < this.house.imagesUrl.length; i++) {
            this.images.push(
                new ImageItem({
                    src: this.house.imagesUrl[i],
                    thumb: this.house.imagesUrl[i],
                })
            );
        }

        this.houseService.toggleCard$.subscribe({
            next: (idHouse: number) => {
                if(idHouse !== this.house.id)
                    this.isCardOpened = false;
            }
        });
    }

    onToggleMap(): void {
        this.houseService.mapUrl = this.house.googleMapLocation;
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        this.houseService.toggleMap(true);
    }

    onToggleMapMobile(): void {
        this.houseService.mapUrl = this.house.googleMapLocation;
        const modalRef = this.modalService.open(HouseMapModalComponent);
    }

    onToggleCardDetails(event: Event, houseId: number): void {
        if (
            (event.target as Element).className.indexOf('show-map-btn') === -1
        ) {
            this.isCardOpened = !this.isCardOpened;
            this.houseService.toggleCard(houseId);
            this.activeTab = 1;
        }
    }
}
