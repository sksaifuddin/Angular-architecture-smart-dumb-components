import { ProductsTableComponent } from './components/products-table/products-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsTableComponent
  ],
  exports: [
    ProductsTableComponent
  ]

})
export class SharedModule { }
