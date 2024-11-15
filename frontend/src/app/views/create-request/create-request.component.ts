import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { v4 as uuidv4 } from 'uuid';
import { JsonValidatorService } from 'src/app/core/services/json-validator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

interface HttpStatus {
  id: number;
  code: string;
  description: string;
  is_important: boolean;
}

interface ResponseContentTypes {
  id: number;
  name: string;
  is_important: boolean;
}

interface Charsets {
  id: number;
  name: string;
  is_important: boolean;
}

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css'],
})
export class CreateRequestComponent implements OnInit {
  request_body: string = '';
  request_header: string = '';
  isBodyValid: boolean | null = null;
  isHeaderValid: boolean | null = null;

  http_status_list: HttpStatus[] = [];
  response_content_types: ResponseContentTypes[] = [];
  methods = ['GET', 'POST', 'PUT', 'PATCH'];
  expireOption = [
    { name: 'Never', value: '0' },
    { name: '1 Month', value: '744' },
    { name: '6 Months', value: '4464' },
    { name: '1 Year', value: '8760' },
  ];
  charsets: Charsets[] = [];

  http_status_id: number | null = null;
  http_response_type_id: number | null = null;
  method: string = this.methods[0];
  charset_id: number | null = null;
  expireOptionSelected: string = this.expireOption[0].value;
  secret: string = '';
  name: string = '';
  uuid: string = uuidv4();

  constructor(
    private apiService: ApiService,
    private jsonValidatorService: JsonValidatorService,
    private localStroageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStroageService.setItem('isLoading', true);
    this.apiService.get('http-status').subscribe((data: any) => {
      this.http_status_list = data.data;
    });

    this.apiService.get('response-content-type').subscribe((data: any) => {
      this.response_content_types = data.data;
    });

    this.apiService.get('charset').subscribe((data: any) => {
      this.charsets = data.data;
    });
    this.localStroageService.setItem('isLoading', false);
  }

  validateJsonBody() {
    this.isBodyValid = this.jsonValidatorService.validateJson(
      this.request_body
    );
  }

  validateJsonHeader() {
    this.isHeaderValid = this.jsonValidatorService.validateJson(
      this.request_header
    );
  }

  handleOnSubmit() {
    console.log('first');
    if (this.isBodyValid && this.isHeaderValid) {
      const requestData = {
        uuid: this.uuid,
        http_status_id: this.http_status_id,
        http_response_type_id: this.http_response_type_id,
        method: this.method,
        charset_id: this.charset_id,
        request_header: this.request_header,
        request_body: this.request_body,
        secret: this.secret,
        name: this.name,
        expire_option: this.expireOptionSelected,
      };

      this.apiService.post('submit-request', requestData).subscribe(
        (response) => {
          console.log('Request submitted successfully:', response);
          // Add any additional logic on success, such as showing a success message.
        },
        (error) => {
          console.error('Error submitting request:', error);
          // Handle error, e.g., display an error message to the user.
        }
      );
    } else {
      console.error('Invalid JSON in header or body.');
    }
  }
}
