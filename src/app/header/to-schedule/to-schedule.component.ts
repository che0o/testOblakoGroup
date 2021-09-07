import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-schedule',
  templateUrl: './to-schedule.component.html',
  styleUrls: ['./to-schedule.component.scss']
})
export class ToScheduleComponent implements OnInit {
  showModal () {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('show')
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
