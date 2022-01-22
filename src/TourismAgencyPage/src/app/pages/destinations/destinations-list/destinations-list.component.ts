import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.scss']
})
export class DestinationsListComponent implements OnInit {

  destinations: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.destinations = [
      {
        id: 1,
        name: 'Posada Palma Dorada',
        description: 'Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.',
        type: 'Posada',
        imageUrl: 'assets/images/palma_dorada.jpg',
        basePrice: 99.99,
        destination: 'Morrocoy',
        services: [
          { type: 'Wifi', iconClass: 'fa fa-wifi'},
          { type: 'Cocina', iconClass: 'fas fa-faucet'},
          { type: 'Aire acondicionado', iconClass: 'fas fa-snowflake'},
          { type: 'Estacionamiento', iconClass: 'fas fa-parking'},
          { type: 'TV', iconClass: 'fas fa-tv'},
          { type: 'Piscina', iconClass: 'fas fa-swimming-pool'},
          { type: 'Playa', iconClass: 'fas fa-umbrella-beach'},
          { type: 'Restaurante', iconClass: 'fas fa-utensils'}
        ],
        imagesUrl: [
          'assets/images/palma1.jpg',
          'assets/images/palma2.jpg',
          'assets/images/palma3.jpg',
          'assets/images/palma4.jpg',
          'assets/images/palma5.jpg',
          'assets/images/palma6.jpg',
          'assets/images/palma7.jpg',
          'assets/images/palma8.jpg'
        ]
      },
      {
        id: 2,
        name: 'Sunsol Punta Blanca',
        description: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        type: 'Hotel',
        imageUrl: 'assets/images/sunsol.jpeg',
        basePrice: 99.99,
        destination: 'Isla de Coche',
        services: [
          { type: 'Wifi', iconClass: 'fa fa-wifi'},
          { type: 'Cocina', iconClass: 'fas fa-faucet'},
          { type: 'Aire acondicionado', iconClass: 'fas fa-snowflake'},
          { type: 'Estacionamiento', iconClass: 'fas fa-parking'},
          { type: 'TV', iconClass: 'fas fa-tv'},
          { type: 'Piscina', iconClass: 'fas fa-swimming-pool'},
          { type: 'Playa', iconClass: 'fas fa-umbrella-beach'},
          { type: 'Restaurante', iconClass: 'fas fa-utensils'}
        ],
        imagesUrl: [
          'assets/images/palma1.jpg',
          'assets/images/palma2.jpg',
          'assets/images/palma3.jpg',
          'assets/images/palma4.jpg',
          'assets/images/palma5.jpg',
          'assets/images/palma6.jpg',
          'assets/images/palma7.jpg',
          'assets/images/palma8.jpg'
        ]
      },
    ]
  }

}
