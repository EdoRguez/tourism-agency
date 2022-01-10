import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselData: any[] = [
    { image: 'assets/images/morrocoy_1.jpg', title: 'Cayo Sombrero', description: 'El lugar perfecto para relajarse con las mejores aguas critalinas y arena blanca' },
    { image: 'assets/images/morrocoy_2.jpg', title: 'Playa', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere nam eius minus explicabo suscipit' },
    { image: 'assets/images/morrocoy_3.jpg', title: 'Arena Blanca', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere nam eius minus explicabo suscipit' },
    { image: 'assets/images/morrocoy_4.jpg', title: 'Agua Cristalina', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere nam eius minus explicabo suscipit' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
