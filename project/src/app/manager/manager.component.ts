import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../shared/manager.service';
import { Manager } from '../shared/manager';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService} from '../auth.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  public managers: Manager[];
  opened = false;
  message = new FormControl('LogOut');
message2 = new FormControl('Menu');
message3 = new FormControl('Click To Delete');
message4 = new FormControl('Click To Update');



  constructor(private _managerService : ManagerService , private router : Router,
    public authService : AuthService) { }

  ngOnInit()
  {
this.readInventory();
  }
newInvent(event:any){
  event.preventDefault();
  this._managerService.setter( new Manager());
  this.router.navigate(['createIn']);
}

readInventory(){
  this._managerService.readInventory().subscribe(
    data =>{
      // console.log(data);
      this.managers=data['msg'];
    },
    // error =>{
    //   console.log(error);

    // }
  )
}
DoUpdate(manager){
this._managerService.setter(manager);
this.router.navigate(['createIn']);
}
doDelete(manager){

  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Inventory!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      this._managerService.deleteInventory(manager._id).subscribe(
     data =>{
       this.managers.splice(this.managers.indexOf(manager),1)
     },
     error =>{

     }
   )
      Swal.fire(
        'Deleted!',
        'Your Inventory file has been deleted.',
        'success'
      )

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your Inventory is safe :)',
        'error'
      )
    }
  })
}
}
