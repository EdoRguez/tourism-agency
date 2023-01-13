import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { BoatMapComponent } from '../../boat-map/boat-map.component';
import { BoatsService } from '../../boats.service';

@Component({
    selector: 'app-boat-item',
    templateUrl: './boat-item.component.html',
    styleUrls: ['./boat-item.component.scss'],
})
export class BoatItemComponent implements OnInit {
    @Input() boat: any;

    isCardOpened: boolean = false;
    isMapOpened: boolean = false;

    activeTab = 1;
    images: GalleryItem[] = [];

    constructor(
        private boatService: BoatsService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        for (let i = 0; i < this.boat.imagesUrl.length; i++) {
            this.images.push(
                new ImageItem({
                    src: this.boat.imagesUrl[i],
                    thumb: this.boat.imagesUrl[i],
                })
            );
        }

        this.boatService.toggleCard$.subscribe({
            next: (idBoat: number) => {
                if (idBoat !== this.boat.id) this.isCardOpened = false;
            },
        });
    }

    onToggleMap(): void {
        this.isMapOpened = !this.isMapOpened;
        this.boatService.toggleMap(this.isMapOpened);
    }

    onToggleMapMobile(): void {
        const modalRef = this.modalService.open(BoatMapComponent);
    }

    onToggleCardDetails(event: Event, boatId: number): void {
        if (
            (event.target as Element).className.indexOf('show-map-btn') === -1
        ) {
            this.isCardOpened = !this.isCardOpened;
            this.boatService.toggleCard(boatId);
            this.activeTab = 1;
        }
    }
}
