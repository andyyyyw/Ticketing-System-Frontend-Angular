/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from './configuration.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/api/system';

  constructor(private http: HttpClient) {}

  saveConfiguration(config: Configuration): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveConfig`, config);
  }

  startSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/startSystem`, {});
  }

  stopSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/stopSystem`, {});
  }

  getTicketAvailability(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/ticketAvailability`);
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Configuration} from './configuration.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/api/system';

  constructor(private http: HttpClient) { }

  // Method to get ticket availability
  getTicketAvailability(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/tickets/availability`);
  }

  // Method to save configuration
  saveConfiguration(config: Configuration): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/configure`, config);
  }

  startSystem(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/start`, {});
  }

  stopSystem(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/stop`, {});
  }
}
