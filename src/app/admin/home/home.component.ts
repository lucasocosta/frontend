import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app-entrega-frontend';

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('TOKEN');
    this.router.navigate(['/admin']);
  }
}
