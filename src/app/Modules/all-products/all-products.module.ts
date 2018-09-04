import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsListComponent } from './container/all-products-list/all-products-list.component';


@NgModule({
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    SharedModule
  ],
  declarations: [AllProductsListComponent],
  exports: [
    AllProductsListComponent
  ]
})
export class AllProductsModule { }
