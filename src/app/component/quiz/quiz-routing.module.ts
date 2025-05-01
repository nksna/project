import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { QuizComponent } from './quiz/quiz/quiz.component';
import { SelectedCourseComponent } from './quiz/selected-course/selected-course.component';
import { LayoutComponent } from '../../layout/layout.component';

const routes: Routes = [
  { path: '', component: SelectedCourseComponent},
  // { path:'/layout' , component:LayoutComponent}
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
