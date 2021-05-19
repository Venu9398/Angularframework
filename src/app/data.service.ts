import { Injectable } from '@angular/core';
import { Products } from '../app/models/product.module'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 private motogp:Products[]=[
    {
      productTitle:"BRAD BINDER",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/motogp/2021/profile-binder-21.component.crop-7x5-5.ts=1614246966375.jpg/content/websites/ktm-com/asia/in/en/racing/our-heroes/brad-binder/jcr:content/root/responsivegrid_1_col/ridersTeaser"
    },
    {
      productTitle:"MIGUEL OLIVEIRA",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/motogp/2021/profile-oliveira-21.component.crop-7x5-5.ts=1614246967960.jpg/content/websites/ktm-com/asia/in/en/racing/our-heroes/miguel-oliveira/jcr:content/root/responsivegrid_1_col/ridersTeaser"
    },
    {
      productTitle:"DANILO PETRUCCI",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/motogp/2021/profile-petrucci-21.component.crop-7x5-5.ts=1614246968965.jpg/content/websites/ktm-com/asia/in/en/racing/our-heroes/danilo-petrucci/jcr:content/root/responsivegrid_1_col/ridersTeaser"
    },{
      productTitle:"IKER LECUONA",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/motogp/2021/profile-lecuona-21.component.crop-7x5-5.ts=1614246967103.jpg/content/websites/ktm-com/asia/in/en/racing/our-heroes/iker-lecuona/jcr:content/root/responsivegrid_1_col/ridersTeaser"
    },
    {
      productTitle:"REMY GARDNER",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/motogp/2021/gardner-profile-21.component.crop-7x5-5.ts=1618211132799.jpg/content/websites/ktm-com/asia/in/en/racing/our-heroes/remy-gardner/jcr:content/root/responsivegrid_1_col/ridersTeaser"
    },
  ]

  getmotogpData():Products[]{
    return this.motogp;
  }
}
