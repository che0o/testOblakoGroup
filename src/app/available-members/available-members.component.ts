import {Component, OnInit} from '@angular/core';
import {USERS} from "../users";

@Component({
  selector: 'app-available-members',
  templateUrl: './available-members.component.html',
  styleUrls: ['./available-members.component.scss']
})
export class AvailableMembersComponent implements OnInit {
  groupOptions: any = [{id: 1, name: 'Администрирование'}, {id: 2, name: 'Аналитика'}, {id: 3, name: 'Еще одна группа'}]
  selectedGroup = 1
  positionOptions: any = [{id: 1, name: 'Менеджер по персоналу'}, {id: 2, name: 'Начальник подразделения'}, {id: 3, name: 'Специалист'}];
  selectedPosition = 1
  experienceOptions: any = [{id: 1, name: '3 - 10 лет'}, {id: 2, name: 'Без стажа'}, {id: 3, name: '1 - 3 года'}]
  selectedExperience = 1

  users = USERS

  focus(e: any) {
    e.target.labels[0].classList.add('label--focused')
  }

  blur(e: any) {
    e.target.labels[0].classList.remove('label--focused')
  }

  options = [
    {
      group: 'system',
      title: 'Поиск'
    },
    {
      group: 'system',
      title: 'Группа'
    },
    {
      group: 'system',
      title: 'Должность'
    },
    {
      group: 'system',
      title: 'Стаж'
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

  constructor() { }

  ngOnInit(): void {
  }

}
