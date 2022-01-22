import { Component, OnInit } from '@angular/core';
import { DestinationsService } from './destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  showMapRight: boolean = false;
  
  constructor(private destinationService: DestinationsService) { }

  ngOnInit(): void {
    this.destinationService.showMapAction$.subscribe(
      (value: boolean) => {
        this.showMapRight = value;
      }
    );
  }

}
