import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-destination-map-modal',
  templateUrl: './destination-map-modal.component.html',
  styleUrls: ['./destination-map-modal.component.scss']
})
export class DestinationMapModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
