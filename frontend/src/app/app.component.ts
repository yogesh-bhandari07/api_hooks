import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api-service.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private apiService: ApiService,
    private LocalStorageService: LocalStorageService
  ) {}
  ngOnInit(): void {
    if (!this.LocalStorageService.getItem('user')) {
      console.log('first time');
      const uuid = uuidv4();
      this.apiService
        .post('user/create', { uuid: uuid })
        .subscribe((data: any) => {
          this.LocalStorageService.setItem('user', data.data);
        });
    }
  }
}
