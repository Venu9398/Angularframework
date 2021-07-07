import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductsComponent } from '../admin/viewproducts/viewproducts.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component:AdminComponent ,children:[
  {path:'viewproduct',component:ViewproductsComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
