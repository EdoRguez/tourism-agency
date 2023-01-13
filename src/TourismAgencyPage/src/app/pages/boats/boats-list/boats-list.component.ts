import { Component, OnInit } from '@angular/core';
import { BoatsService } from '../boats.service';

@Component({
    selector: 'app-boats-list',
    templateUrl: './boats-list.component.html',
    styleUrls: ['./boats-list.component.scss'],
})
export class BoatsListComponent implements OnInit {
    boats: any[] = [];

    constructor(private _boatsService: BoatsService) {}

    ngOnInit(): void {
        this._boatsService.getBoats().subscribe((res: any[]) => {
            this.boats = res;
        });
    }
}
