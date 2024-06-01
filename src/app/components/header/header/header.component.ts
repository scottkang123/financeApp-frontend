import { Component } from '@angular/core';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (
    private keycloakService: KeycloakService
  ) {}

  isAuthenticated(): boolean {
    return this.keycloakService.isLoggedIn();
  }
}
