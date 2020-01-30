import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] = [];
  $cartItems = new BehaviorSubject<IProduct[]>(this.cartItems);

  cartQuantity = 0;
  $cartQuantity = new BehaviorSubject<number>(this.cartQuantity);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);
  constructor() { }

  addItemsToCart(item: IProduct) {
    let cartItem = this.cartItems.find(x => x.id == item.id)
    if (cartItem) {
      cartItem.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.cartQuantity++;
    console.log(this.cartItems);

    this.cartTotal += +item.pPrice;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }


  removeProduct(item, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.pPrice;
    this.cartTotal -= totalPrice;
    this.cartQuantity -= item.quantity;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }

  addQuantity(item: IProduct) {
    let cartItem = this.cartItems.find(x => x.id == item.id)
    cartItem.quantity++;
    this.cartTotal += +item.pPrice;
    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
  
  subtractQuantity(item: IProduct, index) {
    let cartItem = this.cartItems.find(x => x.id == item.id)
    if (cartItem.quantity == 1) {
      this.removeProduct(item, index)
    } else {
      cartItem.quantity--;
      this.cartTotal -= +item.pPrice;
      this.$cartItems.next(this.cartItems);
      this.$cartTotal.next(this.cartTotal);
      this.$cartQuantity.next(this.cartQuantity);
    }
  }
}
