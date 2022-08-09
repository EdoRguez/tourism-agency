import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  mapUrl: string = '';

  private showMapSubject = new Subject<boolean>();

  get showMapAction$(): Observable<boolean> {
    return this.showMapSubject.asObservable();
  }

  toggleMap(value: boolean): void {
    this.showMapSubject.next(value);
  }

  constructor() { }
}
