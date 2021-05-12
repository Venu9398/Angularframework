import { Component } from '@angular/core';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userObj:User={username:"",dob:"",email:""};
 // users=[];

 
  addUserData(){
   
   
    console.log(this.userObj)
    
    //push into users array
   //this.users.push(userObj)

    //clear form flields
   // ref.reset();

    this.userObj={username:"",dob:"",email:""}
  }
}