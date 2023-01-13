import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BoatsService {
    private API_URL: string = `${environment.apiUrl}/json/boats.json`;

    private showMapSubject = new Subject<boolean>();
    private toggleCardSubject = new Subject<number>();

    constructor(private _http: HttpClient) {}

    get toggleCard$(): Observable<number> {
        return this.toggleCardSubject.asObservable();
    }

    get showMapAction$(): Observable<boolean> {
        return this.showMapSubject.asObservable();
    }

    toggleMap(value: boolean): void {
        this.showMapSubject.next(value);
    }

    toggleCard(id: number): void {
        this.toggleCardSubject.next(id);
    }

    getBoat(id: number): Observable<any[]> {
        return this._http.get<any[]>(this.API_URL);
    }

    getBoats(): Observable<any[]> {
        return this._http.get<any[]>(this.API_URL);
    }
}
