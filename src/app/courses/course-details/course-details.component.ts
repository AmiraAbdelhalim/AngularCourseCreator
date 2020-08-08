import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course;
  private _courseSubscription: Subscription; //to keep on listening or discard
  private _routeParamsSubscription: Subscription;

  constructor(private _coursesService: CoursesService,
    private _activatedRoute: ActivatedRoute) { 
    console.log('constructor');
    
  }


  ngOnInit(): void {
    // this._courseSubscription = this._coursesService.courseSubjectObservable.subscribe(
    //   (data) => {
    //     console.log(data);
    //     if (data && typeof data === 'object') {
    //       this.course = data;
    //     }
    //   }
    // );
    this._routeParamsSubscription = this._activatedRoute.paramMap.subscribe(
      (paramMap) => {
        console.log(paramMap);
        if (paramMap.has('id')) {
          const id = paramMap.get('id');
          // this.course = this._coursesService.getCourseById(id);
          this._coursesService.getCourseById(id).subscribe((res: any)=>{
            this.course=res.data;
          });
        }
      }
    );
  }

 
  ngOnDestroy(){
    console.log('destroy');
    // this._courseSubscription.unsubscribe();
    this._routeParamsSubscription.unsubscribe();
  }
    

}
