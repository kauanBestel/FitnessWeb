import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.authService.login(this.email, this.password)) {
      this.errorMessage = 'Invalid email or password';
    }
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
