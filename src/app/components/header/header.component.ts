import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lang: string = 'en';
  selectedLang = localStorage.getItem('lang') || 'en';
  
  
  changeLenguage() {
    console.dir(localStorage.getItem('lang'));
    if (localStorage.getItem('lang') == 'en') {
      console.dir();
      localStorage.setItem('lang', 'es');
      this.selectedLang = 'es';

      window.location.reload();
    } else {
      // if (localStorage.getItem('lang') == 'es') {
        localStorage.setItem('lang', 'en');
        this.selectedLang = 'en';

        window.location.reload();
      // }
    }
  }

  constructor() {}
  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    console.dir(this.lang);
  }

  
}
