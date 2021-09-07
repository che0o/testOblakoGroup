import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  programOptions: any = [
    {id: 1, name: 'Страхование с заботой о клиенте'},
    {id: 2, name: 'Страхование без заботы о клиенте'},
    {id: 3, name: 'Забота о клиенте без страхования'}
  ]
  selectedProgram = 1

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
