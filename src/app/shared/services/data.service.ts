import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsMOdel } from '../../Modules/all-products/models/all-products.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  defaultBehaviourValue = [{ 'id': 1 , 'name': 'Demo', 'description': 'This is demo product', 'price': 13 }];
  private cartProduct = new BehaviorSubject<ProductsMOdel[]>( this.defaultBehaviourValue );
  product = this.cartProduct.asObservable();
  productsArray: any = [];
  constructor() { }

 getCartProduct(newProduct) {
   console.log('this is new product', newProduct);
   this.productsArray.push(newProduct);
   this.cartProduct.next(this.productsArray);
  }

    removeFromCart(idToRemove: number){
      this.productsArray = this.productsArray.filter( item => item.id !== idToRemove );
      this.cartProduct.next(this.productsArray);
    }


}
