import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children:[
      {path:'course',loadChildren:()=> import('../../app/component/course/course.module').then((m)=>m.CourseModule)},
      {path:'quiz' ,loadChildren:()=> import('../../app/component/quiz/quiz.module').then((m)=> m.QuizModule)}
    ]
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
