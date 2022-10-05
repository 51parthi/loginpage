import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator,Validators} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent implements OnInit {
public singupform !:FormGroup;
constructor(private formBulider: FormBuilder ,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.singupform = this.formBulider.group({
      fullname:["" ,Validators.required],
      mobilenumber:["" ,Validators.required],
      email:[" " , Validators.required],
      password:["", Validators.required]
    }

    )

  }
  singup(){
this.http.post <any>("http://localhost:3000/singupusers",this.singupform.value)
   .subscribe(res=>{
    alert("singup Successfull");
    this.singupform.reset();
    this.router.navigate(["login"]);
   },
   error=>{
    alert("somthing went wrong")
   }
   )
  }

}
