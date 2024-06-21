import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nLoaderService {
  constructor(private readonly http: HttpClient) {}

  loadTranslations(lang: string): Observable<Record<string, string>> {
    return this.http
      .get<Record<string, string>>(`/assets/i18n/${lang}.json`)
      .pipe(take(1));
  }
}
