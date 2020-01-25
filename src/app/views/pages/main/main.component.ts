import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { IShuriken } from 'src/app/shared/interfaces/i-shuriken';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // shurikens: IShuriken[] = [
  //   {
  //     url: '/assets/Kakashi.jpg',
  //     name: 'Kakashi',
  //     desc: 'Hello world'
  //   }
  // ]
  images = ['FourNinjaStars1.jpg', 'PaperNinjaStar.jpg', 'MangaStar1.jpg'].map((n) => `/assets/${n}`);
  constructor() { }

  ngOnInit() {
  }

}
