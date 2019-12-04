import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private email: string;
  private senha: string;

  private authInvalido: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authInvalido = false;
  }

  auth() {
    this.authService.auth(this.email, this.senha).subscribe(response => {      
      if (response.success === true) {
        localStorage.setItem("TOKEN", response.token);
        this.authInvalido = false;

        this.router.navigate(['/admin/home']);
      }
    }, error => {
      this.authInvalido = true;
    });
  }

}

export class AuthResponse {
  token: string;
  success: boolean;
}
