import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
   signupForm: FormGroup | any;
   constructor(private formBuilder: FormBuilder) { }
   ngOnInit() {
      this.signupForm = this.formBuilder.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required],
         confirmPassword: ['', [Validators.required]],
         mobileNumber: ['', Validators.required]
      });
   }
   submitForm() {
      this.signupForm.valid
      this.signupForm.reset();
      return this.signupForm.value;
   }
}