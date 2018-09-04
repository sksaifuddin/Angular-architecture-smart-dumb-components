import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartProductsComponent } from './container/cart-products/cart-products.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [CartProductsComponent]
})
export class CartModule { }
