import { Injectable } from '@angular/core';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public courses: Array<Course> = [];

  constructor() { }

  ngOnInit() {
    this.courses = [new Course("CPR", 80), new Course("AED", 90), new Course("ACLS", 100), new Course("EMR", 60), new Course("PALS", 70)];
  }

  getCourses() {
    return this.courses;
  }


}
