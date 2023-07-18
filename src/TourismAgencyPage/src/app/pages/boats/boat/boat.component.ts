import { Component, OnInit } from '@angular/core';
import { BoatsService } from '../boats.service';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {
    boat: any;
    images: GalleryItem[] = [];
    galleryId: string = 'myLightbox';

    constructor(
        private _boatsService: BoatsService,
        private route: ActivatedRoute,
        public gallery: Gallery,
        private lightbox: Lightbox
    ) {}

    ngOnInit(): void {
        const destinationId: number = +this.route.snapshot.params['id'];

        this._boatsService
            .getBoat(destinationId)
            .subscribe((res: any[]) => {
                this.boat = res.find((x) => x.id === destinationId);
                this._boatsService.mapUrl =
                    this.boat.googleMapLocation;
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
        for (let i = 0; i < this.boat.imagesUrl.length; i++) {
            this.images.push(
                new ImageItem({
                    src: this.boat.imagesUrl[i],
                    thumb: this.boat.imagesUrl[i],
                })
            );
        }

        const galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.load(this.images);
    }
}
