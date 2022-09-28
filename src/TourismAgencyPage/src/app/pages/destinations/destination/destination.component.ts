import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destination: any;
  images: GalleryItem[] = [];

  constructor(private _destinationsService: DestinationsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const destinationId: number = +this.route.snapshot.params['id'];

    this._destinationsService.getDestination(destinationId).subscribe(
      (res: any[]) => {
        this.destination = res.find(x => x.id === destinationId);
        this._destinationsService.mapUrl = this.destination.googleMapLocation;
        this.mapImages();
      }
    );
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  private mapImages(): void {
    for(let i = 0; i < this.destination.imagesUrl.length; i++) {
      this.images.push(new ImageItem({ src: this.destination.imagesUrl[i], thumb: this.destination.imagesUrl[i] }));
    }
  }

}
