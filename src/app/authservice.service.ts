import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  userData =  new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if (localStorage.getItem("userData") !== null) {
      this.decodeUserData()
    }
  }

  decodeUserData(){
    let encodedToken= JSON.stringify(localStorage.getItem("userData"));
    let decodedToken:any = jwtDecode(encodedToken)
    console.log(decodedToken);
    this.userData.next (decodedToken);
  }

  logOut(){
    localStorage.removeItem("userData");
    this._Router.navigate(["./login"]);
    this.userData.next (null);
  }

register(userData:object):Observable<any>{

  return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',userData)
}

login(userData:object):Observable<any>{

  return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)
}


}
