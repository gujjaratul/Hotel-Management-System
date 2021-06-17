import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Manager } from '../shared/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
   manager : Manager;
  private baseUrl: string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http : HttpClient) { }


  createInventory(manager: Manager){

    return this.http.post(this.baseUrl+'/api/addin',manager, {headers:this.headers,responseType:'text'});
  }

  readInventory(){
    return this.http.get(this.baseUrl+'/api/getin',{headers: this.headers});
  }
  updateInventory(manager:Manager){
    return this.http.put(this.baseUrl+'/api/updatein',manager,{headers:this.headers});
}
deleteInventory(_id:string){
  return this.http.delete(this.baseUrl+'/api/deletein/'+_id,{headers:this.headers});
}

setter(manager: Manager){
  this.manager= manager;
}
getter(){
  return this.manager;
}

}
