import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  // @Input() pPic: string;
  // @Input() pName: string;
  // @Input() pDescription: string;
  // @Input() pPrice: number;
  // @Input() pReview: number;
  @Input() item: IProduct;
  constructor(private dService: DataService) { }

  ngOnInit() {
  }

}
