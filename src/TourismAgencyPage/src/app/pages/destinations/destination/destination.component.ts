import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { DestinationsService } from '../destinations.service';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
    selector: 'app-destination',
    templateUrl: './destination.component.html',
    styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
    destination: any;
    images: GalleryItem[] = [];
    galleryId: string = 'myLightbox';

    constructor(
        private _destinationsService: DestinationsService,
        private route: ActivatedRoute,
        public gallery: Gallery,
        private lightbox: Lightbox
    ) {}

    ngOnInit(): void {
        const destinationId: number = +this.route.snapshot.params['id'];

        this._destinationsService
            .getDestination(destinationId)
            .subscribe((res: any[]) => {
                this.destination = res.find((x) => x.id === destinationId);
                this._destinationsService.mapUrl =
                    this.destination.googleMapLocation;
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
        for (let i = 0; i < this.destination.imagesUrl.length; i++) {
            this.images.push(
                new ImageItem({
                    src: this.destination.imagesUrl[i],
                    thumb: this.destination.imagesUrl[i],
                })
            );
        }

        const galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.load(this.images);
    }
}
