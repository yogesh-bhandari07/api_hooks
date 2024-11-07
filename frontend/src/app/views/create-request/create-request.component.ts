import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { v4 as uuidv4 } from 'uuid';
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
  http_status_list: HttpStatus[] = [];
  response_content_types: ResponseContentTypes[] = [];
  methods = ['GET', 'POST', 'PUT', 'PATCH'];
  expireOption = [
    {
      name: 'Never',
      value: '0',
    },
    {
      name: '1 Month',
      value: '744',
    },
    {
      name: '6 Month',
      value: '4464',
    },
    {
      name: '1 Year',
      value: '8760',
    },
  ];
  charsets: Charsets[] = [];
  uuid = uuidv4();
  headerPlaceHolder = { 'X-Foo-Bar': 'Hello World' };
  bodyPlaceHolder = {
    identity: {
      id: 'b06cd03f-75d0-413a-b94b-35e155444d70',
      login: 'John Doe',
    },
    data: {
      roles: 'Admin',
    },
  };
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('http-status').subscribe((data: any) => {
      this.http_status_list = data.data;
    });
    this.apiService.get('response-content-type').subscribe((data: any) => {
      this.response_content_types = data.data;
    });
    this.apiService.get('charset').subscribe((data: any) => {
      this.charsets = data.data;
    });
  }
}
