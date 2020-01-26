import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profiles = [
    {
      photo: '/assets/JPHeadShot.jpg',
      name: 'Joseph',
      number: 2099862996
    }
  ]

}
