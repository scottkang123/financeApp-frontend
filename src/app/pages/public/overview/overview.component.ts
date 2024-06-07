import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  constructor(
    private router: Router
  ) {}

  navigateToSignIn() {
    this.router.navigate(["/signin"]);
  }
}
