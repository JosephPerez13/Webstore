import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: IProduct;
  // products: IProduct[]= [];
  constructor(private dService: DataService) { }

  ngOnInit() {
    // this.products = this.dService.getProducts();
  }

}
