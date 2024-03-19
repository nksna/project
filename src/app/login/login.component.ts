import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.login = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', [Validators.required]]
    })
  }
  logindata(login01: FormGroup) {
    console.log(login01.value)
    this.login.valid
    this.login.reset();
  }
  
  



}
