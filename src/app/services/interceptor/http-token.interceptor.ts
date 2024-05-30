import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';
import { KeycloakService } from '../keycloak/keycloak.service';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const keycloakService = inject(KeycloakService);
  
  const token = keycloakService.keycloak.token;

  // Define URL prefixes that require authentication
  //const secureUrlPrefixes = ['/api/v1/user'];  // Add /api/v1/user to the secure prefixes];
  //console.log('Request URL:', req.url);  // Log the request URL
  // Normalize the URL by removing query parameters and fragments
  //const requestUrl = new URL(req.url, 'http://localhost:8088').pathname;

  // Check if the request URL contains any of the secure prefixes
  //const isSecureEndpoint = secureUrlPrefixes.some(prefix => requestUrl.startsWith(prefix));

  // Check if the request URL starts with any of the secure prefixes
  //const isSecureEndpoint = secureUrlPrefixes.some(prefix => req.url.startsWith(prefix));
  
  //console.log('Request URL:', req.url);
  //console.log('Is secure endpoint:', isSecureEndpoint);
  //console.log('Token:', token);

  if (token){ //&& isSecureEndpoint) {
    //console.log(token);
    
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};