import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
 data: any;
  constructor() {
     this.data = [
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
  ngOnInit() {
    console.log(this.data);
  }

}
