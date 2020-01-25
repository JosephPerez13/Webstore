import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() name: string;
  @Input() photo: string;
  @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
