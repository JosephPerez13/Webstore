import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = [
    {
      pPic: '/assets/FourNinjaStars1.jpg',
      pName: 'Ninja Stars',
      pDescription: 'This a product for Ninjas of the highest tier',
      pPrice: 20.00,
      pReview: 4.5
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
