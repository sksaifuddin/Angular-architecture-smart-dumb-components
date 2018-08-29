import { AuthenticationComponent } from './container/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
