import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { Constants } from 'src/app/core/constants/contants';

@Component({
    selector: 'app-card-wide-element',
    templateUrl: './card-wide-element.component.html',
    styleUrls: ['./card-wide-element.component.scss'],
})
export class CardWideElementComponent implements OnInit {
    @Input() inputElement: any;
    @Input() isElementBoat!: boolean;
    @Output() toggleMap = new EventEmitter<string>();

    images: GalleryItem[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        for (let i = 0; i < this.inputElement.imagesUrl.length; i++) {
            this.images.push(
                new ImageItem({
                    src: this.inputElement.imagesUrl[i],
                    thumb: this.inputElement.imagesUrl[i],
                })
            );
        }
    }

    onToggleMap(): void {
      this.toggleMap.emit(Constants.MapComputer);
    }

    onToggleMapMobile(): void {
      this.toggleMap.emit(Constants.MapMobile);
    }

    onClickElementDetails(event: Event, elementId: number): void {
        if (
            (event.target as Element).className.indexOf('show-map-text') === -1
        ) {
            this.router.navigate([elementId], { relativeTo: this.route });
        }
    }
}
