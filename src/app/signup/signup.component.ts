import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  
   constractor(){}
singup:FormGroup|any;
ngOnInit(){
   this.singup=new FormGroup({
    "fname":new FormControl(),
    "lname":new FormControl(),
    "email":new FormControl(),
    "password":new FormControl(),
    "confirm password":new FormControl(),
    "phone number":new FormControl(),

   })
}
 
   singupdata(singup:FormGroup){
    
      console.log(this.singup.value); 
      alert("Signup Successfull") 
      this.singup.reset();                      
}
}
