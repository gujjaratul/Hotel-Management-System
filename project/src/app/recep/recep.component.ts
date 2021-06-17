import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService} from '../shared/details.service';
import {Details} from '../shared/Details';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { SearchfilterPipe } from './searchfilter.pipe';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-recep',
  templateUrl: './recep.component.html',
  styleUrls: ['./recep.component.css'],

providers: [SearchfilterPipe]


})
export class RecepComponent implements OnInit {
  details : Details[];
  searchValue : string;
  rzp1;
  message = new FormControl('LogOut');
  message2 = new FormControl('Menu');


  constructor(private _detailsService :DetailsService , private router : Router ,
    public authService : AuthService) {}



  ngOnInit(): void {
    this.readDetailed();
    }
//to get the data on the view
readDetailed(){
  this._detailsService.readDetails().subscribe(
    data=>{

      this.details = data['msg'];

    },
    error=>{
      console.log(error);

    }
  )
}
//to create the new guest detail
newDetail(event:any){
  event.preventDefault();
  this._detailsService.setter(new Details());
  this.router.navigate(['/create']);
}
//to update guest detail
update(detail)
{
  this._detailsService.setter(detail);
  this.router.navigate(['/create']);

}
//to delete guest detail
delete(detail){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to Delete the customer details !',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this._detailsService.deleteDetails(detail._id).subscribe(
    data =>{
      this.details.splice(this.details.indexOf(detail),1);
    }
  )
      Swal.fire(
        'Deleted!',
        'Customer has been deleted.',
        'success'
      )

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        ' :)',
        'error'
      )
    }
  })


}

rzp_test_7HdkaZ1xFGPomB : any;
//for payment gateway
options = {
  "key": "rzp_test_7HdkaZ1xFGPomB",
  "amount": "250000",
  "currency": "INR",
  "name": "My Hotel",
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  "order_id": "",
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",

  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
pay(){
   this.rzp1 = new this.authService.nativeWindow.Razorpay(this.options);
   this.rzp1.open();
}

}
