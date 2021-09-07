import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {
  conditions = [
    'Не использовать код доступа',
    'Требовать регистрацию',
    'Запросить только имя и фамилию',
    'Не требовать регистрацию, имя и фамилию'
  ]

  form = new FormGroup({
    conditions: new FormControl('')
  })

  constructor() {
  }

  ngOnInit(): void {
  }
}
