import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'
import { user } from '../models/user.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})

export class UserdetailsComponent implements OnInit{

  mySubscription : Subscription;
  postObj:any ;
  
  
  constructor(private ar:ActivatedRoute,private us:UserService) { }

  ngOnInit():void {
    let id=this.ar.snapshot.params.id;

    this.us.getpostid(id).subscribe(
      obj=>{
        console.log("obj is ",obj)
        this.postObj=obj;
      },
      err=>{
        console.log("err in reading post",err)
      }
    )
  }
}