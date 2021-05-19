import { Component,  Input, EventEmitter, Output } from '@angular/core';
import { Products } from '../models/product.module'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent  {

  //to receive data from parent as input
  @Input() productObj:Products;
  //create a custom event
  @Output() myEvent=new EventEmitter();


  sendProductDetailsToParent(productTitle){
      //emit data to parent
      this.myEvent.emit(productTitle);
  }


}