import { ProductsMOdel } from './../../models/all-products.model';
import { AllProductsService } from './../../services/all-products.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.css']
})
export class AllProductsListComponent implements OnInit {

  products: ProductsMOdel[];
  componentName: string;
  constructor( private _allProducts: AllProductsService ) { }

  ngOnInit() {
    this.getAllProducts();
  }

getAllProducts() {
    const products = this._allProducts.getAllProducts();
    this.setAllProducts(products);
}

setAllProducts( allProducts ) {
  this.products = allProducts;
  this.componentName = 'allproducts';
}

getProduct(product) {
  console.log('prooddd', product);
}


}
