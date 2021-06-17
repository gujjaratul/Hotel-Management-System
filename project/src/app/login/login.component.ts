import { Component, Input, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {



LoginUserData = {email: '', password: ''}
  email:string;
  password : string;
  token: string;
  constructor(private _auth : AuthService,private router :Router) { }


  ngOnInit(): void {

  }
LoginUser(){

  this._auth.LoginUser(this.LoginUserData).subscribe(
    res =>{

      console.log(res)
      this.token = res['token'];
    localStorage.setItem('token', this.token)



   if(this.LoginUserData.email == "recep@1234" && this.LoginUserData.password == "1234")
    {
   this.router.navigate(['recep']);

    }
else if(this.LoginUserData.email == "owner@123" && this.LoginUserData.password == "4567"){
  this.router.navigate(['owner']);
}
else if(this.LoginUserData.email == "manager@1234" && this.LoginUserData.password == "7890")
{
  this.router.navigate(['manager'])
}
  }
    ,
    err => console.log(err)
  )
}
redirect(){
  this.router.navigate(['/about']);

}

}
