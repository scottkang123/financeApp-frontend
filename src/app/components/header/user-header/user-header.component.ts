import { Component, HostListener, OnInit } from '@angular/core';
import { UserControllerService } from '../../../services/services';
import { KeycloakService } from '../../../services/keycloak/keycloak.service';

enum HeaderState {
  INACTIVE, SHOW_ACCOUNT_OPTIONS, SHOW_ANALYZE_OPTIONS, SHOW_MANAGE_OPTIONS
}

interface HeaderOption {
  name: string;
  action: () => any;
}

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit{
  liveClock: string = '';
  userName: string = '';
  currentYear: string = "2024";
  headerState: HeaderState = HeaderState.INACTIVE;
  readonly accountOptions: HeaderOption[];

  constructor(
    private userService: UserControllerService,
    private keycloakSerice : KeycloakService
  ) {
    this.accountOptions = [
      { name: "Account Info", action: this.tempAction.bind(this) },
      { name: "Settings", action: this.tempAction.bind(this) },
      { name: "Help", action: this.tempAction.bind(this) },
      { name: "Log Out", action: this.logout.bind(this) }
    ];
  }

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
    this.userService.getUserName({
    })
      .subscribe({
        next: (response) => {
          this.userName = response['name'];
        
        },
        error: (err) => {
          console.error("Failed to fetch user name: ", err);
        }
      });
  }

  async logout() {
    console.log(this.keycloakSerice);
    await this.keycloakSerice.logout();
    console.log("the user should be loggedout");
  }

  tempAction(): void {
    console.log("1234");
  }

  getAccountOptions(): HeaderOption[] {
    return this.accountOptions;
  }

  showAccountOptions(): void {
    this.headerState = HeaderState.SHOW_ACCOUNT_OPTIONS;
  }

  isAccountOptionsShown(): boolean {
    return this.headerState == HeaderState.SHOW_ACCOUNT_OPTIONS;
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: Event) {
    const clickedInsideAccountButton = (event.target as HTMLElement).closest(".account-button");
    if (!clickedInsideAccountButton) {
      this.headerState = HeaderState.INACTIVE;
    }
  }
}
