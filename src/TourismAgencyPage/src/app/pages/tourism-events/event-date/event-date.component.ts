import { Component, ElementRef, EventEmitter, Injectable, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TourismEventsService } from '../services/tourism-events.service';

const I18N_VALUES: any = {
  'es': {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekLabel: 'sem'
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'es';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) { super(); }

  getWeekdayLabel(weekday: number): string { return I18N_VALUES[this._i18n.language].weekdays[weekday - 1]; }
  override getWeekLabel(): string { return I18N_VALUES[this._i18n.language].weekLabel; }
  getMonthShortName(month: number): string { return I18N_VALUES[this._i18n.language].months[month - 1]; }
  getMonthFullName(month: number): string { return this.getMonthShortName(month); }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.day}-${date.month}-${date.year}`; }
}

@Component({
  selector: 'app-event-date',
  templateUrl: './event-date.component.html',
  styleUrls: ['./event-date.component.scss'],
  providers:
      [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}]
})
export class EventDateComponent implements OnInit {

  @Output() changeStep = new EventEmitter<boolean>();

  @ViewChild('returnBtn', { static: false }) returnBtn?: ElementRef<HTMLElement>;

  model!: NgbDateStruct;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;
  showNextBtn: boolean = false;

  constructor(private renderer: Renderer2,
              calendar: NgbCalendar,
              private tourismEventsService: TourismEventsService) { 
    //this.fromDate = calendar.getToday();
    //this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.showAnimationButton();
  }

  onNext(): void  {
    this.tourismEventsService.selectedOptions.initDate = new Date(this.fromDate?.year as number, this.fromDate?.month as number - 1, this.fromDate?.day as number);
    this.tourismEventsService.selectedOptions.endDate = new Date(this.toDate?.year as number, this.toDate?.month as number - 1, this.toDate?.day as number);

    this.changeStep.next(true);
  }

  onReturn(): void {
    this.changeStep.next(false);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  private showAnimationButton(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.returnBtn?.nativeElement, 'd-none');
      this.renderer.addClass(this.returnBtn?.nativeElement, 'animation-zoomIn');
      this.showNextBtn = true;
    }, 2000);
  }

}
