import { IUser } from './../login/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: IUser): boolean {

    localStorage.setItem('ACCESS_TOKEN', 'access_token');
    if (userInfo.userName === 'maker' && userInfo.password === 'maker') {
        localStorage.setItem('type', 'maker');
        return true;
    } else if (userInfo.userName === 'checker' && userInfo.password === 'checker'){
      localStorage.setItem('type', 'checker');
      return true;
    } else {
      return false;
    }
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
  public isMaker() {
    return localStorage.getItem('type') === 'maker';
  }
  public isChecker() {
    return localStorage.getItem('type') === 'checker';
  }

}
