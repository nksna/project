import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LayoutRoutingModule } from '../../layout/layout-routing.module';


@NgModule({
  declarations: [
    CourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
  ]
})
export class CourseModule { }
