import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public loginForm! : FormGroup;
  constructor(private  formBulider:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBulider.group({
      email :[" " ,Validators.required],
      password :["",Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/singupusers")
    .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

    });
    if (user){
      alert("login Success!!");
      this.loginForm.reset();
      this.router.navigate (["employee"])
    }
    else {
      alert("user not Found")
    }
    },
    error=>{
      alert("somthing went wrong!!")

    }    )

  }

}
