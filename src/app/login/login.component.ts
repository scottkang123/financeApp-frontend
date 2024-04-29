import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  handleSubmit(): void {
    this.userService.login(this.formData).subscribe(
      (response: any) => {
        // Handle successful login
        // Redirect to home page or perform any other action
        console.log('Login successful');
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
        // Display error message or perform any other action
      }
    );
  }

}
