import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor (
    private keycloakService: KeycloakService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.keycloakService.isLoggedIn();
  }
}
