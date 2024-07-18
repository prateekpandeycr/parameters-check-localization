import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.scss',
})
export class Home3Component {
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
  newTitle = '';

  public options = [];
  changeLanguage() {
    if (this.translate.currentLang == 'en') {
      this.translate.use('de');
    } else {
      this.translate.use('en');
    }
  }
}
