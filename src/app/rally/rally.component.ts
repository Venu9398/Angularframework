import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product.module';
import { RallyService } from '../rally.service'

@Component({
  selector: 'app-rally',
  templateUrl: './rally.component.html',
  styleUrls: ['./rally.component.css']
})
export class RallyComponent implements OnInit{

  rally:Products[]=[];
  constructor(private dsobj:RallyService){
  }
  ngOnInit(){
    this.rally=this.dsobj.getrallydata();
  }
}
