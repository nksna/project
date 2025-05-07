import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyseService {

  constructor(private myse:HttpClient) { }

  sendData(d:any){
    return this.myse.post("http://localhost:3000/mca",d)
  }
  getAngularCourse():Observable<any>{
    return this.myse.get("http://localhost:3000/angular-courses")
  }

  getCssCourse(){
    return this.myse.get("http://localhost:3000/css-courses")
  }

  getJsCourse(){

    return this.myse.get("http://localhost:3000/js-courses")

  }

  getHtmlCourse(){

    return this.myse.get("http://localhost:3000/html-courses")
  }

  getAllCourse(){
    return this.myse.get("http://localhost:3000/all")
  }

  courseViewById(id:any):Observable<any>{
    return this.myse.get(`http://localhost:3000/all/${id}`)
  
  }

  angularCourseView(id:any){
    return this.myse.get(`http://localhost:3000/angular-courses/${id}`)
  }

  htmlCourseView(id:any){

    return this.myse.get(`http://localhost:3000/html-courses/${id}`)
  }

  jsCourseView(id:any){
    return this.myse.get(`http://localhost:3000/js-courses/${id}`)

  }
  cssCourseView(id:any){
    return this.myse.get(`http://localhost:3000/css-courses/${id}`)

  }

 
  

}
