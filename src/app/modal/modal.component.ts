import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

  }
  close() {
    this.el.nativeElement.classList.remove('show')
    this.el.nativeElement.classList.add('hidden')
  }
}
