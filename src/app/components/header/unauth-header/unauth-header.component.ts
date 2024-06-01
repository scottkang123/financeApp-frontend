import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface HeaderMenuItem {
  name: string;
  path: string;
}

enum MenuState {
  INACTIVE, SERVICES, SUPPORT
}

@Component({
  selector: 'app-unauth-header',
  templateUrl: './unauth-header.component.html',
  styleUrl: './unauth-header.component.css'
})
export class UnauthHeaderComponent {
  constructor (
    private router: Router
  ) {}

  static readonly servicesMenus: HeaderMenuItem[] = [
    { name: "Market Analysis", path: "/analysis" },
    { name: "Asset Management", path: "/management" },
    { name: "News Overview", path: "/overview" },
    { name: "FA Community", path: "/community" }
  ];

  static readonly supportMenus: HeaderMenuItem[] = [
    { name: "User Support", path: "/support" },
    { name: "Forgot Username or Password?", path: "/reclaim" }
  ];

  selectedMenu: MenuState = MenuState.INACTIVE;
  currentYear: string = "2024";

  getServicesMenus(): HeaderMenuItem[] {
    return UnauthHeaderComponent.servicesMenus;
  }

  getSupportMenus(): HeaderMenuItem[] {
    return UnauthHeaderComponent.supportMenus;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  selectServicesMenu(): void {
    this.selectedMenu = MenuState.SERVICES;
  }
  
  selectSupportMenu(): void {
    this.selectedMenu = MenuState.SUPPORT;
  }

  isServicesMenuSelected(): boolean {
    return this.selectedMenu == MenuState.SERVICES;
  }
  
  isSupportMenuSelected(): boolean {
    return this.selectedMenu == MenuState.SUPPORT;
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest(".menu-button");
    if (!clickedInside) {
      this.selectedMenu = MenuState.INACTIVE;
    }
  }
}
