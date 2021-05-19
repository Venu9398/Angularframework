import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MotocrossComponent } from './motocross/motocross.component';
import { MotogpComponent } from './motogp/motogp.component';
import { ProductsComponent } from './products/products.component';
import { RallyComponent } from './rally/rally.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Products",component:ProductsComponent,children:[
    {path:"MotoGp",component:MotogpComponent},
    {path:"Motocross Supercross",component:MotocrossComponent},
    {path:"Rally",component:RallyComponent},
    {path:"bikes",component:BikesComponent}
  ]
},
  {path:"contactus",component:ContactusComponent},
  { path:'', redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
