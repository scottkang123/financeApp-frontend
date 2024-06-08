import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor (
    private router: Router
  ) {}

  usernameOrEmail: string = "";
  password: string = "";

  onSubmit() {

  }

  navigateToReclaim() {
    this.router.navigate(["/reclaim"]);
  }
}
