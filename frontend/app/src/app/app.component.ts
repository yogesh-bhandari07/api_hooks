import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { ApiService } from './services/api.service';
import { randomUUID } from 'node:crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    if (!this.localStorageService.getItem('user')) {
      const userIdentity = randomUUID();
      this.apiService
        .post('/api/user/create', { userIdentity })
        .subscribe((data: any) =>
          this.localStorageService.setItem('user', data.data)
        );
    }
  }
}
