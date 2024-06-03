import { Component, HostListener, OnInit } from '@angular/core';
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
    private keycloakService : KeycloakService
  ) {
    this.accountOptions = [
      { name: "Account Info", action: this.tempAction.bind(this) },
      { name: "Settings", action: this.tempAction.bind(this) },
      { name: "Help", action: this.tempAction.bind(this) },
      { name: "Log Out", action: this.logout.bind(this) }
    ];
  }

  ngOnInit(): void {
    this.getUserName();
  }

  private getUserName() {
    const profile = this.keycloakService.profile;
    if (profile) {
      this.userName = `${profile.firstName} ${profile.lastName}`;
    }
  }

  async logout() {
    console.log(this.keycloakService);
    await this.keycloakService.logout();
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
