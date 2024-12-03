import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api/tours'; // Backend endpoint for tours

  constructor(private http: HttpClient) {}

  bookTour(tourDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, tourDetails);
  }
}
