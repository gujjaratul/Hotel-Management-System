import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OwnerComponent } from './owner/owner.component';
import { ManagerComponent } from './manager/manager.component';
import { RecepComponent } from './recep/recep.component';
import { LoginComponent } from './login/login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {  DetailsService } from '../app/shared/details.service';
import { UserService} from '../app/shared/user.service';
import { MatIconModule } from "@angular/material/icon";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import { WavesModule, ButtonsModule, IconsModule} from 'angular-bootstrap-md';
import { CreateComponent } from './recep/create/create.component';
import { SearchfilterPipe } from './recep/searchfilter.pipe';
import { BillComponent } from './recep/bill/bill.component';
import {NgxPrintModule } from 'ngx-print';
import { ReservationComponent } from './recep/reservation/reservation.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { CreateupComponent } from './createup/createup.component';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ManagerService } from '../app/shared/manager.service';
import { TokenInterceptorService} from '../app/token-interceptor.service';
import { CreateInComponent } from './manager/create-in/create-in.component';
import {MatRadioModule} from '@angular/material/radio';

import {MatDialogModule} from '@angular/material/dialog'
import { ReservationService } from './shared/reservation.service';
import { ReservationBComponent } from './recep/reservation-b/reservation-b.component';
import { AboutComponent } from './login/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    ManagerComponent,
    RecepComponent,
    LoginComponent,
    CreateComponent,
    SearchfilterPipe,
    BillComponent,
    ReservationComponent,
    CreateupComponent,
    RegisterComponent,
    CreateInComponent,
    ReservationBComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    WavesModule, ButtonsModule, IconsModule,
    MatButtonModule,
    NgxPrintModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
  ],
  providers: [ DetailsService, UserService, AuthService,AuthGuard, ManagerService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi:true
    }
  ,ReservationService
  ],
  bootstrap: [AppComponent],
  exports : [MatToolbarModule,MatButtonToggleModule,FormsModule,SearchfilterPipe]
})
export class AppModule { }
