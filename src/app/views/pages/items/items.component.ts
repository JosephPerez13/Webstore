import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  products = [
    {
      pPic: '/assets/FourNinjaStars1.jpg',
      pName: 'Ninja Stars',
      pDescription: 'This a product for Ninjas of the highest tier',
      pPrice: 20.00,
      pReview: 4.5
    },
    {
      pPic: '/assets/PaperNinjaStar.jpg',
      pName: 'Paper Ninja Stars',
      pDescription: 'This a product for Ninjas of the highest tier',
      pPrice: 10.00,
      pReview: 4.0
    },
    {
      pPic: '/assets/MangaStar1.jpg',
      pName: 'Manga Star',
      pDescription: 'The star used for the different Mangas',
      pPrice: 35.00,
      pReview: 4.5
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
