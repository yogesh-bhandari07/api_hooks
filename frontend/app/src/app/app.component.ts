import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { randomUUID } from 'node:crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    if (!this.localStorageService.getItem('user')) {
      const userIdentity = randomUUID();
      this.localStorageService.setItem('user', userIdentity);
    }
  }
}
