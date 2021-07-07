import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import{FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { MotogpComponent } from './motogp/motogp.component';
import { MotocrossComponent } from './motocross/motocross.component';
import { RallyComponent } from './rally/rally.component';
import { BikesComponent } from './bikes/bikes.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    ProductdetailsComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    RegisterComponent,
    MotogpComponent,
    MotocrossComponent,
    RallyComponent,
    BikesComponent,
    TestComponent,
    PagenotfoundComponent,
    UsersComponent,
    UserdetailsComponent,
    ViewproductsComponent,
    AddproductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
