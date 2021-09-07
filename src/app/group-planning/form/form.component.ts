import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  programOptions: any = [
    {id: 1, name: 'Все'},
    {id: 2, name: 'Программа 1'},
    {id: 3, name: 'Программа 2'},
    {id: 4, name: 'Программа 3'}
  ]
  selectedProgram = 1
  periodOptions: any = [
    {id: 1, name: 'Июнь 2019'},
    {id: 2, name: 'Июль 2019'},
    {id: 3, name: 'Август 2019'}
  ];
  selectedPeriod = 1
  statusOptions: any = [
    {id: 1, name: 'Все'},
    {id: 2, name: 'Статус 1'},
    {id: 3, name: 'Статус 2'},
    {id: 4, name: 'Статус 3'}
  ]
  selectedStatus = 1
  sortOptions: any = [
    {id: 1, name: 'По прогрессу обучения'},
    {id: 2, name: 'По дате'},
    {id: 3, name: 'По количеству участников'}
  ]
  selectedSort = 1

  groupPlanningFilter = new FormGroup({
    search: new FormControl(''),
  })

  options = [
    {
      group: 'system',
      title: 'Поиск'
    },
    {
      group: 'system',
      title: 'Программа'
    },
    {
      group: 'system',
      title: 'Период'
    },
    {
      group: 'system',
      title: 'Статус'
    },
    {
      group: 'additional',
      title: 'Подразделение'
    },
    {
      group: 'additional',
      title: 'Округ'
    },
    {
      group: 'additional',
      title: 'Город'
    }
  ];

  focus(e: any) {
    e.target.labels[0].classList.add('label--focused')
  }

  blur(e: any) {
    e.target.labels[0].classList.remove('label--focused')
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
