import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';
import { KeycloakService } from '../keycloak/keycloak.service';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const keycloakService = inject(KeycloakService);
  
  const token = keycloakService.keycloak.token;

  if (token){ 
    
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("This is inside" + authReq);
    console.log("This is token" + token);
    return next(authReq);
  }
console.log("this is outside");
  return next(req);
};