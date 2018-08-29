import { MaterialModule } from './../../shared/material/material.module';
import { AuthenticationComponent } from './container/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule   } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
