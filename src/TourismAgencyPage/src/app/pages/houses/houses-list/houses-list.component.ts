import { Component, OnInit } from '@angular/core';
import { HousesService } from '../houses.service';

@Component({
    selector: 'app-houses-list',
    templateUrl: './houses-list.component.html',
    styleUrls: ['./houses-list.component.scss'],
})
export class HousesListComponent implements OnInit {
    houses: any[] = [];

    constructor(private _housesService: HousesService) {}

    ngOnInit(): void {
        this._housesService.getHouses().subscribe((res: any[]) => {
            this.houses = res;
        });
    }
}
