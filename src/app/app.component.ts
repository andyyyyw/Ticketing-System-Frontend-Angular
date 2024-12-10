/*import { Component } from '@angular/core';
import { TicketService } from './ticket.service'; // Import your TicketService
import { Configuration } from './configuration.model'; // Import your Configuration model
import { Observable } from 'rxjs';
import { LogDisplayComponent } from './log-display/log-display.component'; // Import your LogDisplayComponent
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component'; // Import your ConfigurationFormComponent
import { HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse for better error handling
import { ControlPanelComponent } from './control-panel/control-panel.component'; // Adjust the path accordingly*/

import { Component } from '@angular/core';
import { TicketService } from './ticket.service'; // Import your TicketService
import { Configuration } from './configuration.model'; // Import your Configuration model
import { LogDisplayComponent } from './log-display/log-display.component'; // Import your LogDisplayComponent
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component'; // Import your ConfigurationFormComponent
import { ControlPanelComponent } from './control-panel/control-panel.component'; // Import your ControlPanelComponent
import { HttpErrorResponse } from '@angular/common/http';
import {TicketDisplayComponent} from './ticket-display/ticket-display.component'; // Import HttpErrorResponse for better error handling

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Mark this component as standalone
  imports: [LogDisplayComponent, ConfigurationFormComponent, TicketDisplayComponent, ControlPanelComponent] // Import the LogDisplayComponent and ConfigurationFormComponent here
})
export class AppComponent {
  title = 'Angular-frontend-two'; // Define the title property
  ticketAvailability: number | null = null; // To hold ticket availability

  constructor(private ticketService: TicketService) {
    console.log('AppComponent initialized');
    this.getTicketAvailability(); // Fetch ticket availability on initialization
  }


  // Method to fetch ticket availability
  getTicketAvailability(): void {
    this.ticketService.getTicketAvailability().subscribe(
      (availability: number) => {
        this.ticketAvailability = availability;
        console.log(`Ticket availability: ${this.ticketAvailability}`);
      },
      (error) => {
        console.error('Error fetching ticket availability:', error);
      }
    );
  }

  // Method to save configuration (example usage)
  saveConfiguration(config: Configuration): void {
    this.ticketService.saveConfiguration(config).subscribe(
      (response: any) => { // Specify the type of response
        console.log('Configuration saved successfully:', response);
      },
      (error: HttpErrorResponse) => { // Specify the type of error
        console.error('Error saving configuration:', error);
      }
    );
  }

  // Method to start the system
  startSystem(): void {
    this.ticketService.startSystem().subscribe(
      (response) => {
        console.log('System started successfully:', response);
      },
      (error) => {
        console.error('Error starting system:', error);
      }
    );
  }

  // Method to stop the system
  stopSystem(): void {
    this.ticketService.stopSystem().subscribe(
      (response) => {
        console.log('System stopped successfully:', response);
      },
      (error) => {
        console.error('Error stopping system:', error);
      }
    );
  }
}
