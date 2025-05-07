import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginformgroup:FormGroup;
  showrequire:boolean=true
  

  constructor(private fb:FormBuilder,private server:AuthService,private route:Router){
    this.loginformgroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(7)]]
    });
    
  
    
  }

  logindata:any

  ngOnInit(){
    this.server.getuser().subscribe((r)=>
      this.logindata=r
    )
  }

  submit(){
 
    console.log("login",this.logindata)
    console.log("form",this.loginformgroup.value)
    let a=this.logindata.find((v:any)=>v.name===this.loginformgroup.value.name && v.password===this.loginformgroup.value.password)
    console.log(a,"a")
    if(a){
    if(a.role=="admin"){
       alert("admin")
       this.route.navigate(['/layout']);
       localStorage.setItem('key',a.role)    
    }else if (a.role=="student") {
      alert("student")
      localStorage.setItem('key',a.role)
      this.route.navigate(['/layout']);
    } else {
      alert("give valid user name")
    }}else{
      alert("give valid name and password")
    }
    
     
  }
  
}
