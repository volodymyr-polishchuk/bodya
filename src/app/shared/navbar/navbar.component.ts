import {Component, Input, OnInit} from '@angular/core';

export interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() collapse = true;
  menu: MenuItem[] = [
    {
      title: 'Головне',
      url: '#head',
    },
    {
      title: 'Проекти',
      url: '#projects',
    },
    {
      title: 'Контакти',
      url: '#contacts',
    },
    {
      title: 'Напишіть мені',
      url: '#contact_with_me',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
