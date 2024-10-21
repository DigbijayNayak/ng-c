import { Component } from '@angular/core';

@Component({
  selector: 'app-keybinding',
  templateUrl: './keybinding.component.html',
  styleUrls: ['./keybinding.component.css'],
})
export class KeybindingComponent {
  users = [
    { UserName: 'john' },
    { UserName: 'john12' },
    { UserName: 'john_nit' },
    { UserName: 'david' },
  ];
  userName: any;
  userMsg: any;
  isUserValid = false;
  isUserInvalid = false;
  password: any;
  showCapsWarning = false;

  VerifyUserOnKeyUp() {
    if (this.userName.length < 3) {
      this.userMsg = 'User Name too short..';
      this.isUserInvalid = true;
      this.isUserValid = false;
    } else {
      for (var item of this.users) {
        if (item.UserName === this.userName) {
          this.userMsg = 'User name Taken - Try Another';
          this.isUserInvalid = true;
          this.isUserValid = false;
          break;
        } else {
          this.userMsg = 'User Name Available';
          this.isUserInvalid = false;
          this.isUserValid = true;
        }
      }
    }
  }

  VerifyPassword(e: any) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      this.showCapsWarning = true;
    } else {
      this.showCapsWarning = false;
    }
  }
}
