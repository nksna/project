import { Component } from '@angular/core';
import { MyseService } from '../myse.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrl: './httpexample.component.css'
})
export class HttpexampleComponent {

  constructor(private htt:MyseService){
    // this.myForm = new FormGroup({
    //   name : new FormControl,
    //   age : new FormControl,
    //   email : new FormControl,
    //   phn : new FormControl
    // })
  }

  name:any
  age:any
  email:any
  phn:any

  arrObj:any = []

  sendData(){
    this.arrObj.push({name:this.name},{age:this.age},{email:this.email},{phn:this.phn})
    this.htt.sendData(this.arrObj).subscribe((i:any)=>{
      console.log(this.arrObj)
    })
  }



}
