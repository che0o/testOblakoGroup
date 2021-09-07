import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  trainersOptions = [{id: 1, name: 'Сергей Ефремов'}, {id: 2, name: 'Миха Плотников'}, {id: 3, name: 'Владислав Богодилов'}]
  placeholder = 'Тренер'

  dateConfig = {
    locale: 'ru',
    format: 'DD MMMM',
    showGoToCurrent: false,
  }
  selectedDate = '';
  timeConfig = {
    locale: 'ru',
    format: 'HH:mm',
    showTwentyFourHours: true
  }

  isDateSelected = false
  isTimeSelected = false
  isTrainerSelected = false

  focusIn(e: any) {
    if (e) {
      e.target.labels[0].classList.add('event-form__label--focused')
    }
  }

  focusOut(e: any) {
    if (e) {
      e.target.labels[0].classList.remove('event-form__label--focused')
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
