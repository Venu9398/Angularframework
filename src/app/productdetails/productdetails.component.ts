import { Component, Input } from '@angular/core';
import { Products } from '../models/product.module'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent  {

  @Input() productsobj:Products;

}