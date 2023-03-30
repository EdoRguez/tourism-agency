import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-slider',
    templateUrl: './contact-slider.component.html',
    styleUrls: ['./contact-slider.component.scss'],
})
export class ContactSliderComponent implements OnInit {
    
    carouselData: any[] = [
        {
            image: 'assets/images/contact/slider_1.jpg',
            title: 'Cayo Sombrero',
            description:
                'El lugar perfecto para relajarse con las mejores aguas critalinas y arena blanca',
        },
        {
            image: 'assets/images/contact/slider_2.JPG',
            title: 'Playa',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere nam eius minus explicabo suscipit',
        },
        {
            image: 'assets/images/contact/slider_3.jpg',
            title: 'Arena Blanca',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus facere nam eius minus explicabo suscipit',
        }
    ];

    constructor() {}

    ngOnInit(): void {}
}
