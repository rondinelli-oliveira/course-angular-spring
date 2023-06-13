import { Component } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list()
  }

  courses: Course[] = [];
  displayedColumns = ['_id', 'name', 'category'];
}
