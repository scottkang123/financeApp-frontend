import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclaim',
  templateUrl: './reclaim.component.html',
  styleUrl: './reclaim.component.css'
})
export class ReclaimComponent {
  constructor (
    private router: Router
  ) {

  }
  usernameOrEmail: string = "";

  onUsernameOrEmailEntry() {

  }

  navigateToSignIn() {
    this.router.navigate(["/signin"]);
  }
}
