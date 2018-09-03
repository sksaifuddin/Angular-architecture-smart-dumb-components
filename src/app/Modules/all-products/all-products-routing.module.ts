import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsListComponent } from './container/all-products-list/all-products-list.component';

const routes: Routes = [
  {
    path: '',
    component: AllProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AllProductsRoutingModule { }
