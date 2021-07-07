import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.module';
import { UserService } from 'src/app/user.service'
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent {

  bikes:Products[]=[];
  constructor(private dsobj:UserService){}
  
  ngOnit():void{
    this.dsobj.getusers().subscribe(
      res=>{
        
      },
      err=>{
        console.log("error in reading data",err)
      }
    )
  }
}
