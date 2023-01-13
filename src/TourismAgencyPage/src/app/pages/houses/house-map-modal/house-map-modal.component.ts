import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-house-map-modal',
  templateUrl: './house-map-modal.component.html',
  styleUrls: ['./house-map-modal.component.scss']
})
export class HouseMapModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
