import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(@Inject(LOCALE_ID) public localeId: string) {}
  title = 'localization';
  today: number = Date.now();
  tasksCount = 3;
  newTitle = $localize` Created by ${this.title}`;
  localeList = [
    { code: 'fr-FR', label: 'Franse' },
    { code: 'es-ES', label: 'Espanish' },
  ];
  public options = [
    { value: '1', label: $localize`:@@option1:Option 1` },
    { value: '2', label: $localize`:@@option2:Option 2` },
    { value: '3', label: $localize`:@@option3:Option 3` },
  ];
  changeLanguage(code: string) {
    this.localeId = code;
  }
}
