import { Role } from './../../models/role.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  users: Role[];
  profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  });


  constructor( private _router: Router, private _authenticationService: AuthenticationService,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
   this.users = this._authenticationService.getAllUsers();
    console.log('this is  users data', this.users );
  }

  onSubmit() {
    console.warn(this.profileForm.value.email);
    const role = this.authenticateUser(this.users, this.profileForm.value.email, this.profileForm.value.password);
    if (role) {
      this._toastr.success('Login Successful');
      this._router.navigate(['/products']);
    } else {
      this._toastr.warning('Your email or password is wrong');
    }
  }

authenticateUser(totalUsers = [], email: string , password: string) {
    return totalUsers.some( values => {
        return values.name === email && values.password === password;
    });
}

}
