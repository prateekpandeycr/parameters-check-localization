import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { I18N_SERVICE } from './services/ii18n-loader';
import { I18nLoaderService } from './services/i18n-loader.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    {
      provide: I18N_SERVICE,
      useClass: I18nLoaderService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
