import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { Details } from '../shared/Details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 details : Details;
 selectedDetails : Details[];
  private basiUrl : string='http://localhost:3000';
  //we use HttpHeaders to define which type of data we are using i.e json
  private headers = new HttpHeaders().set('Content-type' , 'application/json');
  constructor(private http : HttpClient) { }

// for creating
  createDetails(details:Details){
    return this.http.post(this.basiUrl+ '/api/recep' ,details,{headers:this.headers,responseType:'text'})
  }

  //for getting the detail from data base
  readDetails(){
    return this.http.get(this.basiUrl+ '/api/getdet' , {headers:this.headers});
  }
//to update
  updateDetails(details : Details){
    return this.http.put(this.basiUrl+ '/api/update' ,details,{headers:this.headers,} );
  }
//for deleting
  deleteDetails(_id:string){
    return this.http.delete(this.basiUrl+ '/api/delete/'+_id,{headers:this.headers});
  }

//this method will set the form values when we update the details
  setter(details:Details){
    this.details = details;
  }

  getter(){
    return this.details;
  }
}
