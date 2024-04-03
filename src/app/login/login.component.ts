import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  imageUrls: string[] = [
    '/assets/images/img1.jpg',
    '/assets/images/img2.jpg',
    '/assets/images/img3.jpg',
    '/assets/images/img4.jpg',
    '/assets/images/img5.jpg'
  ];
  currentImageUrlIndex = 0;
  changeBackgroundImage() {
    this.currentImageUrlIndex = (this.currentImageUrlIndex + 1) % this.imageUrls.length;
  }
  login: FormGroup | any;
  showPopup: boolean = false;
  constructor(private formbuilder: FormBuilder, private toastr: ToastrService) { }
  login03() {
    // Perform login process here (e.g., validate credentials)

    // For demonstration purposes, let's assume the login is successful
    this.toastr.success('You are Successfully loggedin!');
  }
  ngOnInit(): void {
    this.login = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', [Validators.required]]
    })
    this.startBackgroundImageLoop();
  }
  startBackgroundImageLoop(): void {
    setTimeout(() => {
      this.currentImageUrlIndex = (this.currentImageUrlIndex + 1) % this.imageUrls.length;
      this.startBackgroundImageLoop();
    }, 3000);
  }
  logindata(login01: FormGroup) {
    console.log(login01.value)
    this.login.valid
    this.login.reset();
  }
}
