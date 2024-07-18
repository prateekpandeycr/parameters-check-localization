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
}
