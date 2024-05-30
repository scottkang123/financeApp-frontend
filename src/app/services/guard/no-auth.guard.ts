import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from '../token/token.service';
import {inject} from '@angular/core';
import {KeycloakService} from '../keycloak/keycloak.service';

export const noAuthGuard: CanActivateFn = () => {
    const keycloakService = inject(KeycloakService);
    const router = inject(Router);

    if (!keycloakService.isLoggedIn()) {
        return true;
    }
    router.navigate(['user-home']);
    return true;

};