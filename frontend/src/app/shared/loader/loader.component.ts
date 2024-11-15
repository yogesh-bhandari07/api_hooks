import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}
  isLoading = this.localStorageService.getItem('isLoading') ?? false;
  ngOnInit(): void {}
}
