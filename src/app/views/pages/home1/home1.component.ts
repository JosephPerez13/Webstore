import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  // shurikens: IShuriken[] = [
  //   {
  //     url: '/assets/Kakashi.jpg',
  //     name: 'Kakashi',
  //     desc: 'Hello world'
  //   }
  // ]
  images = ['PaperNinjaStar.jpg', 'MangaStar1.jpg', 'blackNinjaStar.jpg', 'packageDeal.jpg'].map((n) => `/assets/${n}`);
  constructor() { }

  ngOnInit() {
  }

}
