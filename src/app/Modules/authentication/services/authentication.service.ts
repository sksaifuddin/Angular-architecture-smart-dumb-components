import { Role } from './../models/role.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

getAllUsers(): Role[]  {
  let data;
  return data = [
      {
        id: 1,
        name: 'admin@gmail.com',
        role: 'Admin',
        password: '123456'
      },
      {
        id: 2,
        name: 'guest@gmail.com',
        role: 'Guest',
        password: '123456'
      },
      {
        id: 1,
        name: 'user@gmail.com',
        role: 'User',
        password: '123456'
      }
  ];
}


}
