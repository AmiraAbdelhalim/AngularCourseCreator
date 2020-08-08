import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses;
  clickedCourseTitle;
  currentPage: number =1;

  constructor(private _coursesService: CoursesService,
    private _activatedRoute: ActivatedRoute) {
    console.log('constructor');
   }

  ngOnInit(): void {
    // this.courses=this._coursesService.getCourses();
    this._activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      const params = {};
      queryParamMap.keys.forEach(
        (key) => (params[key] = queryParamMap.get(key))
      );
      this._coursesService.getCourses(params).subscribe((res:any)=>{
        console.log(res);       
          this.courses=res.data;
          this.currentPage=res.page;
      });
    });
  }
  onCourseClick(course){//takes the value of the clicked course title
    console.log(course);
    this.clickedCourseTitle=course;
  }

  onCourseItemClick(course){//takes the value and send it to the service observable to change its pointer(head)
    this._coursesService.changeCourseData(course);
  }

}
