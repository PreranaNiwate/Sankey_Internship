// LoginComponent.ts
import { Component } from '@angular/core';
import { SignUp } from '../signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: Login = new Login();

  constructor(private router: Router) {}

  onLogin() {
    const localUser = localStorage.getItem('registerDetails');
    if (localUser) {
      const users: SignUp[] = JSON.parse(localUser);
      const isUserPresent = users.find(
        (user: SignUp) =>
          user.username === this.loginObj.username &&
          user.password === this.loginObj.password
      );
      if (isUserPresent) {
        alert('Successfully Logged in');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/movieDisp');
      } else {
        alert('Incorrect username or password');
      }
    } else {
      alert('No registered users found.');
    }
  }
}

export class Login {
  username: string = '';
  password: string = '';
}
