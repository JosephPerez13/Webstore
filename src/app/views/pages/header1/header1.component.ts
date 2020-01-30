import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { IProduct } from 'src/app/shared/interfaces/i-product';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {
  showList = false;
  cartCount = 0;
  cartItems: IProduct[] = [];
  cartTotal = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });
    this.cartService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });
    this.cartService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleList() {
    this.showList = !this.showList;
  }

  removeItem(item, index) {
    this.cartService.removeProduct(item, index);
  }

  addQuantity(item: IProduct) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item: IProduct, index) {
    this.cartService.subtractQuantity(item, index);
  }
}
