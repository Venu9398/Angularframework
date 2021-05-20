import { Injectable } from '@angular/core';
import { Products } from '../app/models/product.module'
@Injectable({
  providedIn: 'root'
})
export class MotocrossService {
  getridersMotocross: any;
  ridersMotocross(): Products[] {
    throw new Error('Method not implemented.');
  }
  imagesMotocross: any;

  constructor() { }
  private riders:Products[]=[
    
    {
      productTitle:"COOPER WEBB CLINCHES KTM’S FIFTH AMA SUPERCROSS 450SX CHAMPIONSHIP",
      description:"Red Bull KTM Factory Racing’s Cooper Webb concluded the 2021 AMA Supercross 450SX Championship season with a dominating victory aboard his KTM 450 SX-F FACTORY EDITION at the final round in Salt Lake City, Utah at the beginning of May to clinch his second, and KTM’s fifth crown in the ultra-competitive series",
      productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/news/2021/Cooper%20Webb%20-%202021%20AMA%20Supercross%20450SX%20Champion.component.crop-1x1-4.ts=1619956476040.jpg/content/websites/ktm-com/asia/in/en/ktm-world/news/cooper-webb-clinches-ktm-s-fifth-ama-supercross-450sx-championsh/jcr:content/root/newsmetadata"
      },
      {
        productTitle:"MOTOGP™ 2021: TIME FOR THE NEXT LEVEL",
        description:"KTM Factory Racing unveiled the KTM RC16 colors for the 2021 MotoGP FIM World Championship through a digital presentation that introduced the new look, line-ups and objectives for the anticipated season ahead",
        productImage:"https://www.ktm.com/content/dam/websites/ktm-com/language-masters/en/racing/news/2021/2021%20MotoGP%20KTM%20RC16s.component.crop-1x1-4.ts=1613136247894.jpg/content/websites/ktm-com/asia/in/en/ktm-world/news/motogp--2021--time-for-the-next-level/jcr:content/root/newsmetadata"
        },
        {
          productTitle:"KTM LIFTS THE COVERS OFF THE ALL-NEW KTM 250 ADVENTURE",
          description:"KTM 250 Adventure is launched with the mission of expanding the emerging and rapidly growing segment of adventure motorcycles in India. Its elder sibling, the KTM 390 Adventure captured the imagination and aspiration of enthusiasts. The KTM 250 Adventure is expected to further grow the franchise by encouraging customers to take their first step into the world of Adventure biking.",
          productImage:"https://www.ktm.com/content/dam/websites/ktm-com/asia/in/en/news/KTM_250_Adventure_Key%20Visual.component.crop-1x1-4.ts=1607514490920.jpg/content/websites/ktm-com/asia/in/en/ktm-world/news/ktm-lifts-the-covers-off-the-all-new-ktm-250-adventure/jcr:content/root/newsmetadata"
          },
  ]
  getmotocrossdata():Products[]{
    return this.riders;
  }
}
