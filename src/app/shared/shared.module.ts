import { ProductsTableComponent } from './components/products-table/products-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsTableComponent,
    ButtonComponent
  ],
  exports: [
    ProductsTableComponent
  ]

})
export class SharedModule { }
