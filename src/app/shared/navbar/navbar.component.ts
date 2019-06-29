import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface MenuItem {
  title: string;
  url: string;
}

export interface LanguageItem {
  name: string;
  code: string;
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

  languages: LanguageItem[] = [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: 'Українська',
      code: 'uk',
    },
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  setLang(code: string) {
    this.translate.use(code);
  }
}
