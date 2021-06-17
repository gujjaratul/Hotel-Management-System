import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../shared/user.service';
import { User} from '../shared/User';

@Component({
  selector: 'app-createup',
  templateUrl: './createup.component.html',
  styleUrls: ['./createup.component.css']
})
export class CreateupComponent implements OnInit {
public user : User;
job = [
  { name: "Owner"},
  { name: "Manager"},
  { name: "WatchMan"},
  { name: "Receptionist"},
  { name: "Sr Manager"}
];
  constructor( private _userService:UserService ,private router : Router) {
    // this._userService.user = {
    //   username :'',
    //   job :'',
    //   salary : '',
    //   address :''
    // }
   }

  ngOnInit(){
    this.user = this._userService.getter();
  }
  createUp(){
    if(this.user._id== undefined){
    this._userService.createDepartment(this.user).subscribe(
      data =>{


      this.router.navigate(['/owner']);

      }

    )
    }
    else
    {
      this._userService.updateDepartment(this.user ).subscribe(
        data =>{

          this.router.navigate(['/owner']);

        }
      )
    }
    this.router.navigate(['/owner'])

  }
}
