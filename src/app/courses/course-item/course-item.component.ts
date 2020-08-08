import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input('courseData') course; //alias takes date from its parent
  @Output() courseClick = new EventEmitter<string>(); //send data to its parent

  onClick(){
    this.courseClick.emit(this.course.title);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
