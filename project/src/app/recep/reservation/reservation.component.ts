import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { ReservationService} from '../../shared/reservation.service';
import { Reservation} from '../../shared/reservation';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  public reservations:Reservation[];
  userForm : FormGroup;
  listData : any;
  constructor(private router : Router, private fb : FormBuilder , private reservationService:ReservationService) {

  }
  ngOnInit() {
    this.readReservation();

  }

readReservation(){
  this.reservationService.readReservation().subscribe(
    data =>{
      // console.log(data);
      this.reservations = data['msg'];


    },
//     error =>{
//       console.log(error);
// }
 )
}
newReservation(event:any){
  event.preventDefault();
  this.reservationService.setter(new Reservation());
  this.router.navigate(['/reservB']);
  // console.log('hello');

}
Delete(reservation){
this.reservationService.deleteReservation(reservation._id).subscribe(
  data =>{
    this.reservations.splice(this.reservations.indexOf(reservation),1);
  }
)
}
back(){
  this.router.navigate(['/recep'])
}
}
