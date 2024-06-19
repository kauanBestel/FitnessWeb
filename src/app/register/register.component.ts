import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.authService.register(this.email, this.password)) {
      this.successMessage = 'Registration successful';
      this.errorMessage = '';
      // Optionally, redirect to the login page
      this.router.navigate(['login']);
    } else {
      this.errorMessage = 'Registration failed';
      this.successMessage = '';
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
