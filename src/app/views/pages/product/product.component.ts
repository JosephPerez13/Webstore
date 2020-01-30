import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/i-product';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productDesc: IProduct;
  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    //we are going to grab the ID nunmber
    this.getProduct();
  }


  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('productName');

    this.dService.getProduct(id).subscribe(
      item => this.productDesc = item
    )
  }

}
