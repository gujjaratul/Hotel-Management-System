import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Reservation } from '../shared/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
   reservation : Reservation;
  private baseUrl : string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http : HttpClient) { }

  createReservation(reservation : Reservation){

      return this.http.post(this.baseUrl+'/api/reservein',reservation,{headers:this.headers,responseType:'text'})
  }

  readReservation(){
    return this.http.get(this.baseUrl+'/api/reserveget',{headers:this.headers});
  }
  deleteReservation(_id:string){
    return this.http.delete(this.baseUrl+'/api/reservedet/'+_id,{headers:this.headers});
  }
  setter( reservation :Reservation){
    this.reservation = reservation;
  }
  getter(){
    return this.reservation;
  }
}
