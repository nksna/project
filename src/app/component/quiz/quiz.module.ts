import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectedCourseComponent } from './quiz/selected-course/selected-course.component';


@NgModule({
  declarations: [
   SelectedCourseComponent, 
   
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class QuizModule { }
