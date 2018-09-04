import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ProductsMOdel } from '../../../Modules/all-products/models/all-products.model';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
 data: any;
 newProduct: ProductsMOdel[];
 @Input() products: ProductsMOdel[];
 @Input() componentName: any;
  showAddBUtton: boolean;
  showDeleteButton: boolean;
 constructor( private _dataService: DataService  ) {}
    ngOnInit() {
        this.showButton(this.componentName);
        this._dataService.product.subscribe( product => this.newProduct = product );
    }

    addToCart(product) {
      this._dataService.getCartProduct(product);
    }

    deleteFromCart(product) {
      const idToRemove = product.id;
      this._dataService.removeFromCart(idToRemove);
    }

    showButton(compName) {
        if (compName === 'allproducts') {
            this.showAddBUtton = true;
        } else {
          this.showDeleteButton = true;
        }
    }

}
