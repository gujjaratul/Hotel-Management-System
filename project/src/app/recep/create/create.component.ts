import { Component, OnInit } from '@angular/core';
import { DetailsService} from '../../shared/details.service';
import {Details} from '../../shared/Details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']

})
export class CreateComponent implements OnInit {


  alert : boolean= false;
  public details :Details;


  constructor(public _detailsService:DetailsService , private router :Router) {
    // this._detailsService.details = {
    //   name : '',
    //   phone : '',
    //   adhar : ''
    // }
   }

  ngOnInit() {
    this.details = this._detailsService.getter();
  }
create(){


  if(this.details._id == undefined){
  this._detailsService.createDetails(this.details).subscribe(
    data =>{
  },
//     error =>{
//       console.log(error);
//  }
)
this.alert= true;
}
else{
  this._detailsService.updateDetails(this.details).subscribe(
    data =>{
      // console.log(data);
      this.router.navigate(['/recep'])



    },
    // error =>{
    //   console.log(error);

    // }
  )
}



}
nav(){
  this.router.navigate(['/recep'])
}
}


