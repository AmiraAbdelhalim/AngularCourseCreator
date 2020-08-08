import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../../models/course';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent implements OnInit {
  course: Course =new Course();

  constructor(private _coursesService: CoursesService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
    if(form.valid){
      const course= {...this.course};
      this._coursesService.addCourse(course).subscribe((res:any)=>{
        this._router.navigate(['/courses',res.data.id]);
      });
    }
    
  }

}
