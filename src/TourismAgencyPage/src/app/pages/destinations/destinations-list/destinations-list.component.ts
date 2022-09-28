import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.scss']
})
export class DestinationsListComponent implements OnInit {

  destinations: any[] = [];

  constructor(private _destinationsService: DestinationsService) { }

  ngOnInit(): void {
    this._destinationsService.getDestinations().subscribe(
      (res: any[]) => {
        this.destinations = res;
      }
    );
  }

}
