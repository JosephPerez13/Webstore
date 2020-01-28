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
  // products = [
  //   {
  //     pPic: '/assets/FourNinjaStars1.jpg',
  //     pName: 'Ninja Stars',
  //     pDescription: 'This a product for Ninjas of the highest tier',
  //     pPrice: 20.00,
  //     pReview: 4.5
  //   },
  // ]
  products: IProduct;
  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    //we are going to grab the ID nunmber
    const id = this.route.snapshot.paramMap.get('id');
    this.getProducts(id);
  }

  getProducts(sku: string) {
    // Find this Information Via Service
    console.log(sku)
    this.dService.getItem(sku).subscribe(
      x => this.products = x
    );
  }

}
