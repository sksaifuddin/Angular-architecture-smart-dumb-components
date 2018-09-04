import { ProductsTableComponent } from './components/products-table/products-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot()
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
