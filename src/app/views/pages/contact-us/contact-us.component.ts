import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  images = [
    {
      name: 'Naruto Uzamaki',
      photo: '/assets/NarutoHokage.jpg',
      number: 2096578758
    },
    {
      name: 'Joseph Perez',
      photo: '/assets/JPHeadShot.jpg',
      number: 2098768754
    },
    {
      name: 'Kakashi',
      photo: '/assets/Kakashi.jpg',
      number: 2708763524
    },
  ]

}
