import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Products } from '../models/product.module'

@Component({
  selector: 'app-motogp',
  templateUrl: './motogp.component.html',
  styleUrls: ['./motogp.component.css']
})
export class MotogpComponent implements OnInit{

    motogp:Products[]=[];
    constructor(private dsObj:DataService){
    }
 
    ngOnInit(){
      //obj initialization logic
     this.motogp= this.dsObj.getmotogpData();

    }
}
