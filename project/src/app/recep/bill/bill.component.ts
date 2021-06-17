import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  userForm : FormGroup;
  listData : any;
  constructor( private fb : FormBuilder) {
    this.listData =[];

    this.userForm = this.fb.group({
      name :['',Validators.required],
      child :['',Validators.required],
      adult : ['',Validators.required],
      night : ['',Validators.required],
      date : ['',Validators.required],
      roomtype: ['',Validators.required],
       amount : ['',Validators.required]
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();


  }


  ngOnInit(): void {
  }

}
