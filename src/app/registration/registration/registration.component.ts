import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public showPickADate: boolean = true;
  public showStudentInfo: boolean = false;
  public showSummary: boolean = false;
  public showConfirmation: boolean = false;
  courseSelected: string = "";
  date: string = "empty";
  listOfDates: string[] = ['7/16/2021','7/18/2021','7/19/2021','7/20/2021'];
  student: Student = new Student();
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "";
  

  constructor(private dataService: DataService) {
    this.courseSelected = dataService.getSelectedCourse();
   }

  ngOnInit(): void {
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  displayPickADateUI(): boolean {
    if (this.showPickADate) {
      return this.showPickADate;
    }  else {
      return false;
    }
  }

  displayStudentInfoUI(): boolean {
    if (this.showStudentInfo) {
      return this.showStudentInfo;
    } else {
      return false;
    }
  }

  displaySummaryUI(): boolean {
    if (this.showSummary) {
      return this.showSummary;
    } else {
      return false;
    }
  }

  displayConfirmationUI(): boolean {
    if (this.showConfirmation) {
      return this.showConfirmation;
    } else {
      return false;
    }
  }

  setShowPickADateToFalse() {
    this.showPickADate = false;
    this.showStudentInfo = true;
  }

  setShowStudentInfoToFalse() {
    this.showStudentInfo = false;
    this.showSummary = true;
    this.student.setFirstName(this.firstName);
    this.student.setLastName(this.lastName);
  }

  setShowSummaryToFalse() {
    this.showSummary = false;
    this.showConfirmation = true;
  }

  setShowConfirmtationToFalse() {
    this.showConfirmation = false;
    this.showPickADate = true;
  }

  

}
