import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ReservationService} from '../../shared/reservation.service';
import { Reservation} from '../../shared/reservation';

@Component({
  selector: 'app-reservation-b',
  templateUrl: './reservation-b.component.html',
  styleUrls: ['./reservation-b.component.css']
})
export class ReservationBComponent implements OnInit {
public reservation : Reservation;
selectedValue :any;
alert : boolean = false ;

  constructor(private reservationService : ReservationService, private router: Router) {
    this.reservationService.reservation ={
      name : '',
      child :'',
      adult:'',
      date : '',
      night : ''
    }
   }

  ngOnInit(): void {
    this.reservation= this.reservationService.getter();

  }
create(){
  this.reservationService.createReservation(this.reservation).subscribe(
    data =>{


    },
    // error =>{
    //   console.log(error);

    // }
  )
  this.alert=true;
}
 closeAlert(){
  this.alert = false;


}
navi(){
  this.router.navigate(['/reserv']);

}

}


