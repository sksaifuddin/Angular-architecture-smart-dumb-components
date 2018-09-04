import { MaterialModule } from './../../shared/material/material.module';
import { AuthenticationComponent } from './container/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule   } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AuthenticationRoutingModule,
    ToastrModule.forRoot()
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
