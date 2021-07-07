import { Component, OnInit } from '@angular/core';
import { bike } from'../models/bike.model'
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 bikemodel=new bike("","","")

 onSubmit(){
   console.log(this.bikemodel)
 }
}
