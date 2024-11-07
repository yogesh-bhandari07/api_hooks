import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  title = 'App';

  navbarList = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/',
    },
    {
      name: 'Mork Api',
      url: '/mock-api/list',
    },
  ];

  ngOnInit(): void {}
}
