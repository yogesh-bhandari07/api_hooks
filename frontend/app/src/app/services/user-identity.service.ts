import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserIdentityService {
  private apiUrl = 'http://your-laravel-api-url/api/generate-identity';
  private localStorageKey = 'user-identity';

  constructor(private http: HttpClient) {}

  getUserIdentity(): Observable<string> {
    let identity = localStorage.getItem(this.localStorageKey);

    if (identity) {
      // Identity already exists in localStorage
      return new Observable((observer) => {
        observer.next(identity);
        observer.complete();
      });
    } else {
      // Generate a new identity and store it in localStorage
      return new Observable((observer) => {
        this.http.post<{ uuid: string }>(this.apiUrl, {}).subscribe(
          (response) => {
            identity = response.uuid;
            localStorage.setItem(this.localStorageKey, identity);
            observer.next(identity);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      });
    }
  }
}
