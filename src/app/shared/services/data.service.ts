import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: IProduct[] = [
    {
      id: '0',
      pNameURL: 'FourNinjaStars',
      pPic: '/assets/FourNinjaStars1.jpg',
      pName: 'Ninja Stars',
      pDescription: 'This a product for Ninjas of the highest tier',
      pPrice: 20.00,
      pReview: 4.5,
      link: 'fourNinjaStars',
      quantity: 0
    },
    {
      id: '1',
      pNameURL: 'PaperNinjaStars',
      pPic: '/assets/PaperNinjaStar.jpg',
      pName: 'Paper Ninja Stars',
      pDescription: 'This a product for Ninjas of the highest tier',
      pPrice: 10.00,
      pReview: 4.0,
      link: 'paperNinjaStars',
      quantity: 0
    },
    {
      id: '2',
      pNameURL: 'MangaStars',
      pPic: '/assets/MangaStar1.jpg',
      pName: 'Manga Star',
      pDescription: 'The star used for the different Mangas',
      pPrice: 35.00,
      pReview: 4.5,
      link: 'mangaStars',
      quantity: 0
    }
  ]
  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }

  addToCart(cartItem: IProduct) {
    this.products.push(cartItem);
    console.log(this.products);
  }

  getItem(id: string): Observable<IProduct> {
    return of(this.products.find(
      z => z.id === id
    ));
  }

  getProduct(sku: string): Observable<IProduct> {
    return of(
      this.products.find(
        somethingElse => somethingElse.id === sku
      ));
  }
}

