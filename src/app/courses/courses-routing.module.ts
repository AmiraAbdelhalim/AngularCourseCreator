import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';

// const routes: Routes = [{ path: '', component: CoursesComponent }];

const routes: Routes =[
  {
    path:'',
    component: CoursesComponent,
    children: [
      {
        path:'new',
        component:CoursesFormComponent
      },
    {
      path: ':id',
      component: CourseDetailsComponent
    },
    
  ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
