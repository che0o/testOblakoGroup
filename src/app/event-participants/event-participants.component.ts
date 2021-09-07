import {Component, OnInit} from '@angular/core';
import {USERS} from "../users";

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss']
})
export class EventParticipantsComponent implements OnInit {
  users = USERS

  constructor() {
  }

  ngOnInit(): void {
  }

}
