import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: any;
  password: any;
  registerUserData = {email: '', password:''}
  token: any;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }
registerUser(){
  console.log(this.registerUserData);
  this._auth.registerUser(this.registerUserData).subscribe(
    res =>{


      this.token = res['token'];
    localStorage.setItem('token', this.token)
    }
    ,
    // err => console.log(err)


  )

}
}
