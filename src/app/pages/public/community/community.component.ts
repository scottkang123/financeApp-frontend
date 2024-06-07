import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.css'
})
export class CommunityComponent {
  constructor(
    private router: Router
  ) {}

  navigateToSignIn() {
    this.router.navigate(["signin"]);
  }
}
