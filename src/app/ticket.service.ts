import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from './configuration.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://your-api-url';

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
}
