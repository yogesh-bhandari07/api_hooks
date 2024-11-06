import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private LocalStorageService: LocalStorageService
  ) {}

  private getApiUrl(endpoint: string): any {
    return `${environment.api_url}${endpoint}`;
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status == 401) {
        localStorage.clear();
        window.location.reload();
      }

      console.error(
        `Backend returned code ${error.status}, \n
          Body was: ${error.error}`
      );
    }

    return throwError(error);
  }

  public get(endpoint: string): any {
    return this.http.get(endpoint, this.reqHeaders()).pipe(
      delay(100),
      map((data: any) => data.data || data),
      catchError(this.handleError)
    );
  }

  public get_non(endpoint: string): any {
    return this.http
      .get(endpoint, this.reqHeaders())
      .pipe(catchError(this.handleError));
  }

  public post(endpoint: string, body: {}): any {
    return this.http.post(endpoint, body, this.reqHeaders()).pipe(
      delay(100),
      map((data: any) => data.data || data),
      catchError(this.handleError)
    );
  }

  public reqHeaders() {
    const auth_token = this.LocalStorageService.getItem('user');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (auth_token) {
      headers = new HttpHeaders({
        Accept: 'application/json',
        Authorization: `Bearer ${auth_token}`,
      });
    }

    return {
      headers: headers,
    };
  }
}
