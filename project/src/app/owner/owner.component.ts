import { Component, OnInit } from '@angular/core';
import { UserService} from '../shared/user.service';
import { Router} from '@angular/router';
import { User} from '../shared/user';
import Swal from 'sweetalert2';
import { AuthService} from '../auth.service';
import * as Chartist from '../../../node_modules/chart.js';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chart} from 'node_modules/chart.js';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

message = new FormControl('LogOut');
message2 = new FormControl('Menu');
message3 = new FormControl('Click To Delete');
message4 = new FormControl('Click To Update');
  email: any;
  password: any;
  registerUserData = {email: '', password:''}
  token: any;


public user :User[];
  opened = false;
 constructor(private _userService : UserService ,private router: Router,
  public authService : AuthService) {


   }

  ngOnInit() {
this.readDepart();

    var ctx = document.getElementById('myChart');
    var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['January', 'Febraury', 'March', 'April'],
            datasets: [{
                label: '# increase in number of customer per day',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });






  }
readDepart(){
this._userService.readDepartment().subscribe(
  data =>{
    // console.log(data);
    this.user= data['used'];
  },
  // error =>{
  //   console.log(error);

  // }
)
}

newdep(event){
  event.preventDefault();
  this._userService.setter(new User());
  this.router.navigate(['/createup']);
}

doUpdate(use){
  this._userService.setter(use);
  this.router.navigate(['/createup']);
}

doDelete(use){

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Employee Detail!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this._userService.deleteDepartment(use._id).subscribe(
         data =>{
             this.user.splice(this.user.indexOf(use),1)
           })
      Swal.fire(
        'Deleted!',
        'Employee has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {

    }
  })
}


registerUser(){
  console.log(this.registerUserData);
  this.authService.registerUser(this.registerUserData).subscribe(
    res =>{

      // console.log(res)
      this.token = res['token'];
    localStorage.setItem('token', this.token)
    }
    ,
    // err => console.log(err)


  )

}
  }


