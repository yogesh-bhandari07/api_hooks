import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
interface ApiRequests {
  id: string;
  name: string;
  secret: string;
  header: any;
  body: any;
  expiry: string;
  method: string;
  http_status: any;
  http_response_type: any;
  charset: any;
  user: any;
  created_at: any;
}
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css'],
})
export class ListRequestComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  searchTerm: string = '';
  apiRequests: ApiRequests[] = [];
  filteredInvoices = this.apiRequests;
  pageSize = 5; // Number of items per page
  currentPage = 1; // Current page
  totalInvoices = this.apiRequests.length; // Total number of invoices

  // Get the current page invoices
  get paginatedInvoices() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.apiRequests.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.apiRequests.length / this.pageSize);
  }
  // Handle page change
  onPageChange(page: number) {
    this.currentPage = page;
  }
  onSearch(): void {
    if (this.searchTerm === '') {
      this.apiRequests = this.filteredInvoices;
    }
    this.apiRequests = this.apiRequests.filter(
      (apiRequests) =>
        apiRequests.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        apiRequests.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.localStorageService.setItem('isLoading', true);
    this.apiService.get('api-requests').subscribe((data: any) => {
      this.apiRequests = data.data;
    });
    this.localStorageService.setItem('isLoading', false);
  }
}
