import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

export const I18N_SERVICE = new InjectionToken<II18nLoader>('18N_SERVICE');

export interface II18nLoader {
  loadTranslation(lang: string): Observable<Record<string, string>>;
}
