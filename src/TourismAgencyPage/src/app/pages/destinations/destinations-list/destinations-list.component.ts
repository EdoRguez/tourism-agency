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
          { type: 'Piscina', iconClass: 'fas fa-swimming-pool'},
          { type: 'Mascotas', iconClass: 'fas fa-dog'},
          { type: 'TV', iconClass: 'fas fa-tv'},
          { type: 'Restaurante', iconClass: 'fas fa-utensils'},
          { type: 'Spa', iconClass: 'fas fa-spa'},
          { type: 'Bar', iconClass: 'fas fa-glass-martini-alt'},
          { type: 'Playa', iconClass: 'fas fa-umbrella-beach'},
          { type: 'Aire acondicionado', iconClass: 'fas fa-snowflake'},
          { type: 'Estacionamiento', iconClass: 'fas fa-parking'},
          { type: 'Seguridad', iconClass: 'far fa-eye'},
          { type: 'Pago Sin Efectivo', iconClass: 'far fa-credit-card'},
          { type: 'Lavandería', iconClass: 'fas fa-soap'},
          { type: 'Servicio Limpieza', iconClass: 'fas fa-broom'},
          { type: 'Sombrillas', iconClass: 'fas fa-umbrella-beach'},
          { type: 'Baño', iconClass: 'fas fa-bath'},
          { type: 'Escritorio', iconClass: 'fas fa-pen-fancy'},
          { type: 'Balcón y ventana', iconClass: 'far fa-window-maximize'},
          { type: 'Teléfono', iconClass: 'fas fa-phone'},
          { type: 'Caja Fuerte', iconClass: 'fas fa-toolbox'},
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
        name: 'Hotel Posada Los Juanes',
        description: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        type: 'Hotel',
        imageUrl: 'assets/images/sunsol.jpeg',
        basePrice: 99.99,
        destination: 'Morrocoy',
        services: [
          { type: 'Wifi', iconClass: 'fa fa-wifi'},
          { type: 'Piscina', iconClass: 'fas fa-swimming-pool'},
          { type: 'TV', iconClass: 'fas fa-tv'},
          { type: 'Teléfono', iconClass: 'fas fa-phone'},
          { type: 'Seguridad', iconClass: 'far fa-eye'},
          { type: 'Aire acondicionado', iconClass: 'fas fa-snowflake'},
          { type: 'Estacionamiento', iconClass: 'fas fa-parking'},
          { type: 'Pago Sin Efectivo', iconClass: 'far fa-credit-card'},
          { type: 'Servicio Limpieza', iconClass: 'fas fa-broom'},
          { type: 'Baño', iconClass: 'fas fa-bath'},
          { type: 'Balcón y ventana', iconClass: 'far fa-window-maximize'}
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
        id: 3,
        name: 'Posada Perla Negra',
        description: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        type: 'Posada',
        imageUrl: 'assets/images/sunsol.jpeg',
        basePrice: 99.99,
        destination: 'Morrocoy',
        services: [
          { type: 'Wifi', iconClass: 'fa fa-wifi'},
          { type: 'TV', iconClass: 'fas fa-tv'},
          { type: 'Baño', iconClass: 'fas fa-bath'},
          { type: 'Seguridad', iconClass: 'far fa-eye'},
          { type: 'Lavandería', iconClass: 'fas fa-soap'},
          { type: 'Estacionamiento', iconClass: 'fas fa-parking'},
          { type: 'Aire acondicionado', iconClass: 'fas fa-snowflake'},
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
