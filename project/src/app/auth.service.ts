import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router  } from '@angular/router';



function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get nativeWindow() : any{
    return _window();
  }

  private _registerUrl = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-type' , 'application/json');
  constructor(private http : HttpClient, private router : Router) { }

  registerUser(user){
    return this.http.post(this._registerUrl+ '/api/register' , user,{ headers:this.headers,responseType:'text'})
  }

    LoginUser(user){
      return this.http.post<any>(this._registerUrl+ '/api/login', user,{headers : this.headers})
    }

    loggedIn(){
      return !!localStorage.getItem('token')
    }
    logoutUser(){
      localStorage.removeItem('token')
      this.router.navigate(['login']);
    }
    getToken(){
      return localStorage.getItem('token');
    }

  }



