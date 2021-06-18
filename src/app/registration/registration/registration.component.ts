import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public courseSelected: string = "empty";

  constructor(private dataService: DataService) {
    this.courseSelected = dataService.getSelectedCourse();
   }

  ngOnInit(): void {
  }

}
