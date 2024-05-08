import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog){}

  ngOnInit(): void {
      
  }

  handleSignupAction(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = "850px";
      dialogConfig.height = "450px";
      this.dialog.open(SignupComponent, dialogConfig);
  }

}
