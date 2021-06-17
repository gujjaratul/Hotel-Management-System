import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ManagerService} from '../../shared/manager.service';
import { Manager} from '../../shared/manager';

@Component({
  selector: 'app-create-in',
  templateUrl: './create-in.component.html',
  styleUrls: ['./create-in.component.css']
})
export class CreateInComponent implements OnInit {
  public manager:Manager;
  alert : boolean= false;
  selectedValue :any;
  roomtype = [
    { name: "Single"},
    { name: "Couple"},
    { name: "Family"},
    { name: "HoneyMoon Type"},
    { name: "Basic"}
  ];
  status = [
    { show:"N/A"},
    { show: "Active"},
    { show: "Reseverd"}

  ];
  constructor(private managerService : ManagerService,private router:Router) {
    // this.managerService.manager ={
    //   roomtype :'',
    //   price :'',
    //   dayprice :'',
    //   status : ''
    // }
  }

  ngOnInit() {
    this.manager= this.managerService.getter();
  }

  createInUp(){
    if(this.manager._id == undefined){
    this.managerService.createInventory(this.manager).subscribe(
      data =>{

 }
    )
    this.alert= true;
  }
  else{
    this.managerService.updateInventory(this.manager).subscribe(
      data =>{

  })
}

  }
  nav(){
    this.router.navigate(['manager']);
  }
}
