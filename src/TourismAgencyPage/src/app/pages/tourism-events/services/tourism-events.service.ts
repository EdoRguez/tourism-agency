import { Injectable } from '@angular/core';
import { TourismEvent } from '../interfaces/tourism-event.interface';

@Injectable({
    providedIn: 'root',
})
export class TourismEventsService {
    selectedOptions: TourismEvent;

    constructor() {
        // this.selectedOptions = {
        //     type: null,
        //     numberPeople: null,
        //     ticket: null,
        //     logding: null,
        //     initDate: null,
        //     endDate: null,
        //     fullday: null,
        //     night: null,
        // };

        this.selectedOptions = {
            type: 'Amigos',
            numberPeople: 12,
            ticket: 'General',
            logding: 'Tengo alojamiento',
            initDate: new Date(),
            endDate: new Date(),
            fullday: 'Punta Brava',
            night: 'No me gusta la cena',
        };
    }
}
