import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  createS(data:any)
  {
    sessionStorage.setItem('email',data)
  }
  getS()
  {
    return sessionStorage.getItem('email')
  }
  destroyS()
  {
    sessionStorage.removeItem('email')
  }
}