import { Injectable } from '@angular/core';
import { Course } from './model/course';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from './model/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public courses: Array<Course> = [];
  public selectedCourse : string = "";
  messages: Observable<any[]>;

  constructor(firestore: AngularFirestore) { 
    // the instantiation was set up here because the ngOnInit is not run when define this service in the home component
    this.courses = [new Course("CPR", 80), new Course("AED", 90), new Course("ACLS", 100), new Course("EMR", 60), new Course("PALS", 70)];
    this.messages = firestore.collection('messages').valueChanges();
  }

  ngOnInit() {
    
  }

  getMessages(){
    return this.messages;
  }

  setSelectedCourse(course: string) {
    this.selectedCourse = course;
  }
  getSelectedCourse() {
    return this.selectedCourse;
  }
  getCourses() {
    return this.courses;
  }

  courseTopHalfLength() {
    let firstHalf = Math.ceil(this.courses.length / 2);
    return firstHalf;
  }

  coursesBottomHalfLength() {
    let bottomHalf = Math.floor(this.courses.length / 2);
    return bottomHalf;
  }
}
