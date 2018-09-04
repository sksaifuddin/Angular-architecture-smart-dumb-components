import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { ProductsMOdel } from '../../../all-products/models/all-products.model';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  product: any;
  constructor( private _dataService: DataService ) { }

  ngOnInit() {
    this._dataService.product.subscribe( product => {
      this.product = product;
    });
  }

// addToCart(productDetails) {
//   console.log('Details', productDetails);
// }

}
