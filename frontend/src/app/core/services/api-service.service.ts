import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Import throwError
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment'; // Import environment
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.api_url;

  constructor(
    private http: HttpClient,
    private LocalStorageService: LocalStorageService
  ) {}

  // GET request to fetch data from the server with headers
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = this.getHttpOptions(params);
    return this.http.get<T>(url, options).pipe(catchError(this.handleError)); // Catch errors and handle
  }

  // POST request to send data to the server with headers
  post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = this.getHttpOptions();
    return this.http
      .post<T>(url, body, options)
      .pipe(catchError(this.handleError)); // Catch errors and handle
  }

  // PUT request to update data on the server with headers
  put<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = this.getHttpOptions();
    return this.http
      .put<T>(url, body, options)
      .pipe(catchError(this.handleError)); // Catch errors and handle
  }

  // DELETE request to remove data from the server with headers
  delete<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = this.getHttpOptions();
    return this.http.delete<T>(url, options).pipe(catchError(this.handleError)); // Catch errors and handle
  }

  // Method to handle HTTP errors
  private handleError(error: any) {
    // Log the error for debugging
    console.error('An error occurred:', error);

    // You can customize the error handling here, like mapping it to a user-friendly message
    // Returning throwError with a custom error message
    return throwError('Something went wrong. Please try again later.');
  }

  // Get HTTP options for headers
  private getHttpOptions(params?: HttpParams) {
    const token = this.LocalStorageService.getItem('user');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return { headers, params };
  }
}
