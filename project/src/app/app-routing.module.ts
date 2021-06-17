import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ManagerComponent } from './manager/manager.component';
import { OwnerComponent } from './owner/owner.component';
import { RecepComponent } from './recep/recep.component';
import { CreateComponent } from './recep/create/create.component';
import { BillComponent } from './recep/bill/bill.component';
import { ReservationComponent } from './recep/reservation/reservation.component';
import { CreateupComponent} from '../app/createup/createup.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CreateInComponent } from './manager/create-in/create-in.component';
import { ReservationBComponent } from './recep/reservation-b/reservation-b.component';
import { AboutComponent} from './login/about/about.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent,
  },
  {
    path : 'recep', component : RecepComponent,

  canActivate:[AuthGuard]
  },
  {
    path:'create',component:CreateComponent
  }
  ,
  {
    path : 'manager', component:ManagerComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path : 'owner', component:OwnerComponent,
    canActivate:[AuthGuard]
  }
  ,{
    path : 'bill', component:BillComponent
  },
{
  path : 'createup', component:CreateupComponent,
  canActivate:[AuthGuard]
}
,
  {
    path :'reserv',component:ReservationComponent,

  },
  {
    path: 'reservB', component:ReservationBComponent
  }

,
{
  path :'register',component:RegisterComponent,
  // canActivate:[AuthGuard]
}
,
{
  path : 'createIn',component:CreateInComponent,
  canActivate:[AuthGuard]
}
,
{
  path : 'about', component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
