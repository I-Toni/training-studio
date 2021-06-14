import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayMessage: boolean = false;
  public courses: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
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
