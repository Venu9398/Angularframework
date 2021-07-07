import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { Products } from '../models/product.module';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent  {

  bikes:Products[]=[ ]
  constructor(private usobj:UserService,private router:Router) {}

  }