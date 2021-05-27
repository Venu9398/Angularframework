import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { user } from '../models/user.model'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  mySubscription : Subscription;

  Users:user[]=[];

  constructor(private usobj:UserService,private router:Router) { }

  ngOnInit():void {
    this.mySubscription= this.usobj.getusers().subscribe(
       userData=>{
         //assign posts
         this.Users = userData;
         console.log("this.users")
       },
       err=>{
         console.log("err in getting posts data",err)
       }
 
     )
   }
    
   onSelectId(id){
    this.router.navigateByUrl('users/'+id)
  } 

   ngOnDestroy(){
     this.mySubscription.unsubscribe();
   }
 }
