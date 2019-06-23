import { Component } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  shakeIt = false;

  constructor() { }

  login() {
    this.shakeDialog();
  }
  
  shakeDialog() {
    this.shakeIt = true;
    setTimeout((arg) => {
      this.shakeIt = false;
    },
    300);
  }
}
