import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyseService {

  constructor(private myse:HttpClient) { }

  sendData(d:any){
    return this.myse.post("http://localhost:3000/mca",d)
  }
}
