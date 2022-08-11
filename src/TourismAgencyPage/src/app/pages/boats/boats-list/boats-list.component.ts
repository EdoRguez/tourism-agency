import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boats-list',
  templateUrl: './boats-list.component.html',
  styleUrls: ['./boats-list.component.scss']
})
export class BoatsListComponent implements OnInit {

  boats: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.boats = [
      {
        id: 1,
        name: 'Adrenalina',
        description: 'Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.',
        type: 'Lancha',
        numberPeople: 1,
        imageUrl: 'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_1.JPG',
        basePrice: 99.99,
        destination: 'Morrocoy',
        equipment: [
          { type: 'Equipo de Sonido', iconClass: 'fa fa-music' },
          { type: 'Toldo', iconClass: 'fas fa-umbrella-beach' },
          { type: 'Comedor', iconClass: 'fas fa-utensils' },
          { type: 'Cava', iconClass: 'fas fa-cube' }
        ],
        imagesUrl: [
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_1.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_2.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_3.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_4.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_5.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_6.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_7.JPG',
          'assets/images/embarcaciones/embarcacion_adrenalina/adrenalina_8.JPG',
        ]
      },
      {
        id: 2,
        name: 'Carenero',
        description: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        type: 'Lancha',
        numberPeople: 1,
        imageUrl: 'assets/images/embarcaciones/embarcacion_carenero/carenero_1.JPG',
        basePrice: 99.99,
        destination: 'Morrocoy',
        equipment: [
          { type: 'Equipo de Sonido', iconClass: 'fa fa-music'},
          { type: 'Toldo', iconClass: 'fas fa-umbrella-beach'},
        ],
        imagesUrl: [
          'assets/images/embarcaciones/embarcacion_carenero/carenero_1.JPG',
          'assets/images/embarcaciones/embarcacion_carenero/carenero_2.JPG',
          'assets/images/embarcaciones/embarcacion_carenero/carenero_3.JPG',
          'assets/images/embarcaciones/embarcacion_carenero/carenero_4.JPG',
          'assets/images/embarcaciones/embarcacion_carenero/carenero_5.JPG',
          'assets/images/embarcaciones/embarcacion_carenero/carenero_6.JPG',
          'assets/images/embarcaciones/embarcacion_carenero/carenero_7.JPG',
        ]
      },
      {
        id: 3,
        name: 'Cocori',
        description: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        type: 'Yate',
        numberPeople: 1,
        imageUrl: 'assets/images/embarcaciones/embarcacion_cocori/cocori_1.JPG',
        basePrice: 99.99,
        destination: 'Morrocoy',
        equipment: [
          { type: 'Equipo de Sonido', iconClass: 'fa fa-music'},
          { type: 'Toldo', iconClass: 'fas fa-umbrella-beach'},
        ],
        imagesUrl: [
          'assets/images/embarcaciones/embarcacion_cocori/cocori_1.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_2.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_3.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_4.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_5.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_6.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_7.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_8.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_9.JPG',
          'assets/images/embarcaciones/embarcacion_cocori/cocori_10.JPG',
        ]
      },
      {
        id: 4,
        name: 'Unstopable',
        description: 'Raw denim you probably havent heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        type: 'Lancha Deportiva',
        numberPeople: 8,
        imageUrl: 'assets/images/embarcaciones/embarcacion_unstopable/unstopable_1.JPG',
        basePrice: 350.00,
        destination: 'Morrocoy - Los Manglares',
        equipment: [
          { type: 'Equipo de Sonido', iconClass: 'fa fa-music'},
          { type: 'Toldo', iconClass: 'fas fa-umbrella-beach'},
        ],
        imagesUrl: [
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_1.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_2.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_3.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_4.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_5.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_6.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_7.JPG',
          'assets/images/embarcaciones/embarcacion_unstopable/unstopable_8.JPG',
        ]
      },
    ]
  }

}
