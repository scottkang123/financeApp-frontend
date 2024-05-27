import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(){}
  
  liveClock: string = '';
  
  ngOnInit(): void {
    this.updateClock(); // Initialize the clock immediately
    setInterval(() => this.updateClock(), 1000); // Update the clock every second
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

}

