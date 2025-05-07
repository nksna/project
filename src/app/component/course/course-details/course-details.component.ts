import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MyseService } from '../../../practice/myse.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {

  course:any;

  constructor(private router:ActivatedRoute,private myse:MyseService){}

  ngOnInit(){
    
return this.loadView()

  }

  loadView(){

    const id =Number( this.router.snapshot.paramMap.get('id'));

    this.myse.courseViewById(id).subscribe(res=>{
      this.course =res
    }),
    this.myse.angularCourseView(id).subscribe(res=>{
      this.course =res
    }),
    this.myse.cssCourseView(id).subscribe(res =>{
      this.course = res
    }),
    this.myse.htmlCourseView(id).subscribe(res =>{
      this.course = res
    }),
    this.myse.jsCourseView(id).subscribe(res=>{
      this.course = res
    })

  }

  toggeleAnswer(index:number){
    this.course.questions[index].isAnswer = !this.course.questions[index].isAnswer
  }

  

}
