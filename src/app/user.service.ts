import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,Subscription } from 'rxjs'
import { user } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }
  //create user
  createUser(userObj):Observable<any>{
    return  this.hc.post("/user/createuser",userObj)
  }
  //login user
  loginUser(credentials):Observable<any>{
    return  this.hc.post("/user/login",credentials)
  }

  getUser(username):Observable<any>{
    return this.hc.get(`/user/getuser/${username}`)
}

deleteUser(){

}

updateUser(){

}

  //get data
  getusers():Observable<user[]>{
      return  this.hc.get<user[]>('http://localhost:3000/bikes')
  }

  getpostid(id:number):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/bikes')
  }
}
