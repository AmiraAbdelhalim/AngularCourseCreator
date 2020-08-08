import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesService } from '../services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoursesFormComponent } from './courses-form/courses-form.component';
// /home/amira-pc/iti/angular/lab2/coursesDemo/src/app/services/courses.service.ts

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseItemComponent, CourseDetailsComponent, CoursesFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers:[CoursesService],
  exports: [CoursesComponent],
})
export class CoursesModule { }
