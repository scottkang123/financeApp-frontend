import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  constructor(
    private router: Router
  ) {}

  navigateToSignIn() {
    this.router.navigate(["/signin"]);
  }
}
