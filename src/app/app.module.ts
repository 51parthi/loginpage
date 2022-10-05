import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDasboradComponent } from './employee-dasborad/employee-dasborad.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDasboradComponent,
    LoginpageComponent,
    SingupPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
    
   
    
  
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
