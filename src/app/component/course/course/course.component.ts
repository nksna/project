import { Component } from '@angular/core';
import { MyseService } from '../../../practice/myse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  // username:string='karthii'

  // courseStatus:'html' | 'css' |'js' | 'angular' ='angular'

  Angularcourses:any;
  CssCourses:any;
  HtmlCourse:any;
  jsCourse:any;
  allCourse:any;
  isSelected:boolean = true
  questions:any[]=[]

  constructor(private myse:MyseService,private router:Router){ }

  ngOnInit():void{

    this.myse.getAllCourse().subscribe(res=>{
      this.allCourse = res

    })
    
  
   
}
currentCourse:any;
selectedCourse(d:any){
  let courseStatus = ['html','css','js','angular','all']
  this.currentCourse = courseStatus.find((res)=> res === d)
  if(this.currentCourse==='angular'){
    this.myse.getAngularCourse().subscribe(res=>{
     this.Angularcourses = res;
     this.isSelected= false;
   })
  
 }
 else if (this.currentCourse === 'css'){
   this.myse.getCssCourse().subscribe(res=>{
     this.CssCourses =res
     this.isSelected= false


   })
 }
 else if(this.currentCourse === 'js'){
  this.myse.getJsCourse().subscribe(res=>{
    this.jsCourse = res
    this.isSelected= false

  })

 }
 else if(this.currentCourse === 'html'){
  this.myse.getHtmlCourse().subscribe(res=>{
    this.HtmlCourse = res
    this.isSelected= false

  })
 }

}

viewCourse(id:number){
  
  this.router.navigate(['/layout/course/coursedetails',id])



}

angularCourse(id:number){

  this.router.navigate(['/layout/course/coursedetails',id])


}

cssViewCourse(id:number){

  this.router.navigate(['/layout/course/coursedetails',id])

}

jsViewCourse(id:number){

  this.router.navigate(['/layout/course/coursedetails',id])


}

}

  


