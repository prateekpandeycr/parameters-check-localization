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

  changeLanguage(code: string) {
    this.localeId = code;
  }
}
