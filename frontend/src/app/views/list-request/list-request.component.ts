import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css'],
})
export class ListRequestComponent implements OnInit {
  constructor() {}

  searchTerm: string = '';
  invoices = [
    {
      invoiceNumber: 'PROJ1001',
      customer: 'John Doe',
      amount: 1200,
      issued: '2024-08-01',
      dueDate: '2024-08-15',
    },
    {
      invoiceNumber: 'PROJ1002',
      customer: 'Jane Smith',
      amount: 850,
      issued: '2024-08-05',
      dueDate: '2024-08-20',
    },
    {
      invoiceNumber: 'PROJ1003',
      customer: 'Acme Corp',
      amount: 2500,
      issued: '2024-08-07',
      dueDate: '2024-08-21',
    },
    {
      invoiceNumber: 'PROJ1004',
      customer: 'Global Inc',
      amount: 4750,
      issued: '2024-08-10',
      dueDate: '2024-08-25',
    },
    {
      invoiceNumber: 'PROJ1001',
      customer: 'John Doe',
      amount: 1200,
      issued: '2024-08-01',
      dueDate: '2024-08-15',
    },
    {
      invoiceNumber: 'PROJ1002',
      customer: 'Jane Smith',
      amount: 850,
      issued: '2024-08-05',
      dueDate: '2024-08-20',
    },
    {
      invoiceNumber: 'PROJ1003',
      customer: 'Acme Corp',
      amount: 2500,
      issued: '2024-08-07',
      dueDate: '2024-08-21',
    },
    {
      invoiceNumber: 'PROJ1004',
      customer: 'Global Inc',
      amount: 4750,
      issued: '2024-08-10',
      dueDate: '2024-08-25',
    },
  ];
  filteredInvoices = this.invoices;
  pageSize = 5; // Number of items per page
  currentPage = 1; // Current page
  totalInvoices = this.invoices.length; // Total number of invoices

  // Get the current page invoices
  get paginatedInvoices() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.invoices.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.invoices.length / this.pageSize);
  }
  // Handle page change
  onPageChange(page: number) {
    this.currentPage = page;
  }
  onSearch(): void {
    if (this.searchTerm === '') {
      this.invoices = this.filteredInvoices;
    }
    this.invoices = this.invoices.filter(
      (invoice) =>
        invoice.invoiceNumber
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {}
}
