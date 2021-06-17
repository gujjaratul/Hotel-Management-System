import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User} from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 user : User;
  private baseUrl:string = "http://localhost:3000";

  //we use HttpHeaders to define which type of data we are using i.e json
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http : HttpClient) { }

  createDepartment(user:User){
   return this.http.post(this.baseUrl+ '/api/users',user,{headers:this.headers, responseType:'text'});
  }
  readDepartment(){
    return this.http.get(this.baseUrl+ '/api/find',{headers:this.headers});
  }

  updateDepartment(user:User){
    return this.http.put(this.baseUrl+'/api/udate',user,{headers:this.headers});
  }

  deleteDepartment(_id:string){
    return this.http.delete(this.baseUrl+ '/api/erase/'+_id,{headers:this.headers});
  }
  setter(user:User){
    this.user = user;
  }
  getter(){
    return this.user;
  }
}
