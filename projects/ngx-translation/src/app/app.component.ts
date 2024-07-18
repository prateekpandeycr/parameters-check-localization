import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  siteLanguage = 'English';
  genderList = ['male', 'female', 'other'];
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ];
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(this.languageList[1].code);
  }
  title = 'localization';
  today: number = Date.now();
  tasksCount = 3;
  newTitle = 'rating.label';

  public options = [];
  changeLanguage() {
    if (this.translate.currentLang == 'en') {
      this.translate.use('de');
    } else {
      this.translate.use('en');
    }
  }

  findPath(obj: any, value: string, path: string) {
    if (typeof obj !== 'object') {
      return;
    }

    for (let key in obj) {
      if (obj[key] === value) {
        return `${path}.${key}`; // Return path if value matches
      }

      // Recursively search in case of nested JSON
      let found: any = this.findPath(obj[key], value, `${path}.${key}`);
      if (found) {
        return found;
      }
    }

    return false;
  }

  jsonObject = {
    a: 'a',
    b: {
      c: 'c',
      d: {
        e: 'e',
      },
    },
    f: 'f',
  };

  path: any = this.findPath(this.jsonObject, 'e', '');
}
