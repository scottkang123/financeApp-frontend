import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../../shared/global-constants';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistrationRequest } from '../../services/models/registration-request';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  
  registerRequest: RegistrationRequest = {email: '', firstname: '', lastname: '', password: ''}
  errorMsg : Array<String> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){

  }

  register(){
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (err) =>{
        this.errorMsg = err.error.validationErrors;
      }
    })
  }

  login(){
    this.router.navigate(['login']);
  }

}
