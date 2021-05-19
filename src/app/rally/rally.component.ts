import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product.module';

@Component({
  selector: 'app-rally',
  templateUrl: './rally.component.html',
  styleUrls: ['./rally.component.css']
})
export class RallyComponent {

 rally:Products[]=[
  {
    productTitle:"DIFFERENT CIRCUITS: BOSCH & KTM",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  productImage:"https://blog.ktm.com/wp-content/uploads/2021/03/Image-1_resized.jpg"
  },
  {
    productTitle:"A CONVERSATION WITH MARVIN MUSQUIN",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  productImage:"https://blog.ktm.com/wp-content/uploads/2021/02/Image1_resized.jpg"
  },{
    productTitle:"ONE STEP BEYOND: MEETING THE MAN WHO HELPED ACCELERATE THE KTM RC16 TO THE FRONT OF THE MOTOGP GRID",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  productImage:"https://blog.ktm.com/wp-content/uploads/2021/02/IMAGE12_resized.jpg"
  },
  {
    productTitle:"Musquin got back into the swing of Supercross at the opening round of the 2021 series in Houston, Texas",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  productImage:"https://blog.ktm.com/wp-content/uploads/2021/02/Image2_resized.jpg"
  }
 ]

}
