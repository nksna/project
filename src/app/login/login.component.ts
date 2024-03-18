import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login:any;
constructor(){}

ngOnInit(): void {
  this.login=new FormGroup({
    "email":new FormControl(''),
    "password":new FormControl('')

})
}
logindata(login:FormGroup){
  console.log(this.login.value);
  this.login.reset()
}
  
  



}
