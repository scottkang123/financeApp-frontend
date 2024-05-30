import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from '../token/token.service';
import {inject} from '@angular/core';
import {KeycloakService} from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn = () => {
  const tokenService = inject(KeycloakService);
  const router = inject(Router);
  if (!tokenService.isLoggedIn() || tokenService.keycloak.isTokenExpired()) {
    console.log("redirecting to the home page");
    router.navigate(['/']);
    return false;
  }
  return true;
};