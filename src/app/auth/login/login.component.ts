import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private keycloackService: KeycloakService
  ){

  }

  async ngOnInit(): Promise<void> {
      //await this.keycloackService.init();
      await this.keycloackService.login();
  }


}