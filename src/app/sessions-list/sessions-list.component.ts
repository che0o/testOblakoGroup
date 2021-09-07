import {Component, OnInit} from '@angular/core';
import {SESSIONS} from "../sessions";

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.scss']
})
export class SessionsListComponent implements OnInit {
  sessions = SESSIONS;

  menuVisible = false;

  showMenu(el: any) {
    el.stopPropagation()
    if (el.target.nextElementSibling.style.display == 'none') {
      el.target.nextElementSibling.style.display = 'block';
    } else {
      el.target.nextElementSibling.style.display = 'none'
    }
  }

  hideMenu(el: any) {
    el.target.parentElement.style.display = 'none';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
