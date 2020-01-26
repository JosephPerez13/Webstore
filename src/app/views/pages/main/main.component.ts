import { Component, OnInit } from '@angular/core';


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
