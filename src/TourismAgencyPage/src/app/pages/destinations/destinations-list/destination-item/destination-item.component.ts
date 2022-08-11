import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { DestinationMapModalComponent } from '../../destination-map-modal/destination-map-modal.component';
import { DestinationsService } from '../../destinations.service';

@Component({
  selector: 'app-destination-item',
  templateUrl: './destination-item.component.html',
  styleUrls: ['./destination-item.component.scss']
})
export class DestinationItemComponent implements OnInit {

  @Input() destination: any;

  isCardOpened: boolean = false;
  
  active = 1;
  images: GalleryItem[] = [];

  constructor(private destinationService: DestinationsService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    for(let i = 0; i < this.destination.imagesUrl.length; i++) {
      this.images.push(new ImageItem({ src: this.destination.imagesUrl[i], thumb: this.destination.imagesUrl[i] }));
    }
  }

  onToggleMap(): void {
    this.destinationService.mapUrl = this.destination.googleMapLocation;
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    this.destinationService.toggleMap(true);
  }

  onToggleMapMobile(): void {
    this.destinationService.mapUrl = this.destination.googleMapLocation;
    const modalRef = this.modalService.open(DestinationMapModalComponent);
  }

  onToggleCardDetails(event: Event): void {
    if((event.target as Element).className.indexOf('show-map-btn') === -1) {
      this.isCardOpened = !this.isCardOpened;
    }
  }

}
