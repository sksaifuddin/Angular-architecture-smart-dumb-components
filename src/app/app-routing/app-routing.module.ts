import { AllProductsModule } from './../Modules/all-products/all-products.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 
  {
    path: 'authentication',
    loadChildren: 'src/app/Modules/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'products',
    loadChildren: 'src/app/Modules/all-products/all-products.module#AllProductsModule'
  },
  {
    path: 'cart',
    loadChildren: 'src/app/Modules/cart/cart.module#CartModule'
  }

];

@NgModule({
  imports: [ AllProductsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
