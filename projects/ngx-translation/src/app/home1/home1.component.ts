import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.scss',
})
export class Home1Component {
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
  newTitle = 'Check For Content';

  public options = [];
  changeLanguage() {
    if (this.translate.currentLang == 'en') {
      this.translate.use('de');
    } else {
      this.translate.use('en');
    }
  }
}
