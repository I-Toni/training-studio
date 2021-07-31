import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Course } from '../../model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayMessage: boolean = false;
  public courses: Array<Course> = [];
  public courseSelected: string = "empty";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
    this.dataService.getMessages().subscribe(messages => {
      console.log(messages);
    })
  }

  getMessages(){
    return this.dataService.getMessages();
  }
  
  saveName(name: string) {
    this.dataService.setSelectedCourse(name);
  }
  showConfirmation(): boolean {
    return this.displayMessage;
  }

  hideConfirmation(): boolean {
    if (!this.displayMessage) {
      return true;
    } else {
      return false;
    }
  }

  sendContactInfo() {
    this.displayMessage = true;
  }

  returnHome() {
    this.displayMessage = false;
  }
}
