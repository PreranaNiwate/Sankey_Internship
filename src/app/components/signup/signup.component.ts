import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupObj: SignUp = new SignUp();

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('registerDetails');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signupObj);
      localStorage.setItem('registerDetails', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.signupObj);
      localStorage.setItem('registerDetails', JSON.stringify(users));
    }
    alert('Successfully Registered!!!');
  }
}

export class SignUp {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
