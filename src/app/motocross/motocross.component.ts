import { Component, OnInit } from '@angular/core';
import { MotocrossService } from '../motocross.service'
import { Products } from '../models/product.module';

@Component({
  selector: 'app-motocross',
  templateUrl: './motocross.component.html',
  styleUrls: ['./motocross.component.css']
})
export class MotocrossComponent implements OnInit{
  
  image:Products[]=[];
  constructor(private dsObj:MotocrossService) {
   }
   //obj initialization logic
   ngOnInit(){
   this.image = this.dsObj.getmotocrossdata();

  }
}
