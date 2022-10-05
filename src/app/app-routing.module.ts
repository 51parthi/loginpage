import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDasboradComponent } from './employee-dasborad/employee-dasborad.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SingupPageComponent } from './singup-page/singup-page.component';

const routes: Routes = [
  {path:" ",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginpageComponent},
  {path:"singup",component:SingupPageComponent},
  {path:"employee",component:EmployeeDasboradComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
