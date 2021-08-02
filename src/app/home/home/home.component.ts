import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Course } from '../../model/course';
import { Message } from '../../model/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayMessage: boolean = false;
  public courses: Array<Course> = [];
  public courseSelected: string = "empty";
  public errorMessage: boolean = false;
  public homeMessages: Message[] = [];
  message: Message = {
    fname:  "",
    lname:  "",
    email: "",
    phone: "",
    message: ""
  }
  


  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
    //this.homeMessages = this.dataService.getMessages();
    this.dataService.getMessages().subscribe(messages => {
      this.homeMessages = messages;
      console.log(this.homeMessages);
    });
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
    if (this.message.email == "" && this.message.fname == "" && this.message.lname == "" &&
     this.message.phone == "" && this.message.message == "") {
      this.errorMessage = true;
    } else {
      this.displayMessage = true;
      this.dataService.addMessage(this.message);
      this.message.fname = "";
      this.message.lname = "";
      this.message.email = "";
      this.message.phone = "";
      this.message.message = "";
    }
    
  }

  returnHome() {
    this.displayMessage = false;
  }
}
