import { ProductsMOdel } from './../models/all-products.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor() { }

  getAllProducts(): ProductsMOdel[] {
    let data;
    return data = [
      {
        id: 1,
        name: 'mobile',
        description: 'its a nice mobile',
        price: 45000
      },
      {
        id: 2,
        name: 'Laptop',
        description: 'its a great laptop',
        price: 35000
      },
      {
        id: 3,
        name: 'Mouse',
        description: 'its a nice mouse',
        price: 1000
      },
    ];
  }


}
