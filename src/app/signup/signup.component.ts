import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
   imageUrls: string[] = [
      '/assets/images/img1.png',
      '/assets/images/img2.png',
      '/assets/images/img3.png',
      '/assets/images/img4.jpg'
   ];
   currentImageUrlIndex = 0;
   changeBackgroundImage() {
      this.currentImageUrlIndex = (this.currentImageUrlIndex + 1) % this.imageUrls.length;
   }
   signupForm: FormGroup | any;
   constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }
   signup2() {
      this.toastr.success("Your successfull signup!")
   }
   ngOnInit() {
      this.signupForm = this.formBuilder.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required],
         confirmPassword: ['', [Validators.required]],
         mobileNumber: ['', Validators.required]
      });
      this.startBackgroundImageLoop();
   }
   startBackgroundImageLoop(): void {
      setTimeout(() => {
         this.currentImageUrlIndex = (this.currentImageUrlIndex + 1) % this.imageUrls.length;
         this.startBackgroundImageLoop();
      }, 3000);
   }
   submitForm(signup01: FormGroup) {
      console.log(signup01.value)
      this.signupForm.valid
      this.signupForm.reset();
   }
}