import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/i-product'
import { DataService } from 'src/app/shared/services/data.service';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  products: IProduct[];

  constructor(private dService: DataService, private cService: CartService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }
}
