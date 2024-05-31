import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/services';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit{

  liveClock: string = '';
  userName: string = '';

  constructor(private userService: UserService, private keycloakSerice : KeycloakService
  ) {}

  ngOnInit(): void {
    this.updateClock(); // Initialize the clock immediately
    setInterval(() => this.updateClock(), 1000); // Update the clock every second
    this.getUserName();
  }


  updateClock(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    this.liveClock = `${hours}:${minutes}:${seconds} ${month}-${day}-${year}`;
  }

  private getUserName() {
    this.userService.getUserName().subscribe({
      next: (response) => {
        this.userName = response;
        console.log(response); // This should print "Scott" if the response is { name: "Scott" }
        console.log("Hi" + this.userName); // Log the userName to verify

      },
      error: (err) => {
        console.error("Failed to fetch user name: ", err);
      }
    });
    // this.userService.getUserName({
    // })
    //   .subscribe({
    //     next: (response : {name : string}) => {
    //       console.log(response);
    //       this.userName = response.name; // Accessing the name from the response map
        
    //     },
    //     error: (err) => {
    //       console.error("Failed to fetch user name: ", err);
    //     }
    //   });
  }

  async logout() {
    await this.keycloakSerice.logout();
    console.log("the user should be loggedout");
    
  }

}
