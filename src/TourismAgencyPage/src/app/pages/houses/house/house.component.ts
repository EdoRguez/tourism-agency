import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { HousesService } from '../houses.service';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
    house: any;
    images: GalleryItem[] = [];
    galleryId: string = 'myLightbox';

    constructor(
        private _housesService: HousesService,
        private route: ActivatedRoute,
        public gallery: Gallery,
        private lightbox: Lightbox
    ) {}

    ngOnInit(): void {
        const destinationId: number = +this.route.snapshot.params['id'];

        this._housesService
            .getHouse(destinationId)
            .subscribe((res: any[]) => {
                this.house = res.find((x) => x.id === destinationId);
                this._housesService.mapUrl =
                    this.house.googleMapLocation;
                this.mapImages();
            });
    }

    scroll(el: HTMLElement): void {
        el.scrollIntoView({ behavior: 'smooth' });
    }

    openInFullScreen(index: number): void {
        this.lightbox.open(index, this.galleryId, {
            panelClass: 'fullscreen',
        });
    }

    private mapImages(): void {
        for (let i = 0; i < this.house.imagesUrl.length; i++) {
            this.images.push(
                new ImageItem({
                    src: this.house.imagesUrl[i],
                    thumb: this.house.imagesUrl[i],
                })
            );
        }

        const galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.load(this.images);
    }
}
