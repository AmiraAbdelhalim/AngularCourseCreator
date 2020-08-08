import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CoursesService {
  private _api='https://afternoon-falls-30227.herokuapp.com/api/v1/courses';

  private _courseSubject = new BehaviorSubject(null);//take the initial value and keep the last value it has
  // private _courses = [
  //   {
  //     id: 1,
  //     title: 'NodeJs',
  //     instructor: 'Ali',
  //     isAvailable: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'JavaScript',
  //     instructor: 'Mahmoud',
  //     isAvailable: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'HTML',
  //     instructor: 'Ali',
  //     isAvailable: true,
  //   },
  //   {
  //     id: 4,
  //     title: 'Angular',
  //     instructor: 'Eman',
  //     isAvailable: false,
  //   },
  // ];
  constructor(private _http: HttpClient) {}

  changeCourseData(data) {//change the data
    this._courseSubject.next(data);
  }

  get courseSubjectObservable() {//listen to data
    return this._courseSubject.asObservable();
  }

  // getCourses() {//get course from array
  //   return this._courses;
  // }
  //get courses from api
  getCourses(params={}){
    return this._http.get(this._api,{params});
  }

  // getCourseById(id){
  //   return this._courses.find((course)=> course.id == id);
  // }
  //get course by id from api
  getCourseById(id){
    return this._http.get(`${this._api}/${id}`);
  }

  addCourse(course){
    return this._http.post(this._api, course);
  }

}
