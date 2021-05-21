import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
  //inject Fakedata service object
  export class TestComponent implements OnInit , OnDestroy{

   mySubscription:Subscription;
  
    myPosts:Post[]=[];
  users;
    //inject Fakedata service object
    constructor(private fsObj:FakedataService) { }
  
    ngOnInit(): void {
    this.mySubscription= this.fsObj.getPosts().subscribe(
       PostData=>{
          //assign posts
          this.myPosts=PostData;
       },
        err=>{
         console.log("err in getting posts data",err)
        }
        )
     this.mySubscription = this.fsObj.getusers().subscribe(
       pagesdata => {
         this.users=pagesdata;
         console.log("this.users")
       },
       err=>{
         console.log("err in getting post",err)
       }
       );
    }

    ngOnDestroy(){
      this.mySubscription.unsubscribe
    }
  }
