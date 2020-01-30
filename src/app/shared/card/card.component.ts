import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: IProduct;
  // products: IProduct[]= [];
  constructor(private dService: DataService, private cartService: CartService) { }

  ngOnInit() {
    // this.products = this.dService.getProducts();
  }
  addToCart(c: IProduct) {
    this.cartService.addItemsToCart(c);
  }
}
