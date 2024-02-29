import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedUser: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      this.loggedUser = JSON.parse(loggedUser);
    }
  }
  showLoggedUser(): boolean {
    const currentRoute = this.router.url;
    return (
      currentRoute !== '/login' &&
      currentRoute !== '/register' &&
      !!localStorage.getItem('loggedUser')
    );
  }

  showLogoutButton(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/login' && currentRoute !== '/register';
  }

  onLogout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
