import { Component, OnInit } from '@angular/core';
import { BoatsService } from './boats.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss']
})
export class BoatsComponent implements OnInit {

  showMapRight: boolean = false;

  constructor(private boatService: BoatsService) { }

  ngOnInit(): void {
    this.boatService.showMapAction$.subscribe(
      (value: boolean) => {
        this.showMapRight = value;
      }
    );
  }

}
