import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public displayMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
