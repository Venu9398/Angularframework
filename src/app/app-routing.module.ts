import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MotocrossComponent } from './motocross/motocross.component';
import { MotogpComponent } from './motogp/motogp.component';
import { ProductsComponent } from './products/products.component';
import { RallyComponent } from './rally/rally.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Products",component:ProductsComponent,children:[
    {path:"MotoGp",component:MotogpComponent},
    {path:"Motocross Supercross",component:MotocrossComponent},
    {path:"Rally",component:RallyComponent},
    {path:"bikes",component:BikesComponent,children:[
      {path:"viewproducts",component:ViewproductsComponent},
      {path:"addproducts",component:AddproductsComponent},
      {path:'',redirectTo:"/Products/bikes/viewproducts",pathMatch:"full"}
    ]}
  ]
},
  {path:"contactus",component:ContactusComponent},
  {path:"test",component:TestComponent,children:[
    {path:"users",component:UsersComponent}
  ]},
  {path:"users/:id",component:UserdetailsComponent},
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
