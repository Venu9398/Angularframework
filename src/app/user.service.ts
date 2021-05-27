import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,Subscription } from 'rxjs'
import { user } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  //get data
  getusers():Observable<user[]>{
      return  this.hc.get<user[]>('http://localhost:3000/users')
  }

  getpostid(id:number):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/users/'+id)
  }
}
