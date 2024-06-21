import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, mergeMap } from 'rxjs';
import { I18N_SERVICE } from '../services/ii18n-loader';
import { I18nLoaderService } from '../services/i18n-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  messageCount = 9;
  name = 'Sudhir';
  welcome: string | undefined;
  localSubscription: Subscription | undefined;
  nameValue = 'Prateek';
  click$ = new Subject<string>();
  heading: string | undefined;
  metaData: string | undefined;
  href: string | undefined;

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly route: ActivatedRoute,
    @Inject(I18N_SERVICE) private readonly i18n: I18nLoaderService
  ) {}

  ngOnInit(): void {
    this.localSubscription = this.route.params
      .pipe(
        mergeMap(({ lang }) => {
          console.log(lang);
          return this.i18n.loadTranslations(lang);
        })
      )
      .subscribe((translations) => {
        console.log(translations);
        loadTranslations(translations);
        this.welcome = $localize`:@@home.welcome:${this.name}:name:${this.messageCount}:messageCount:`;
        this.heading = $localize`:@@heading:`;
        this.metaData = $localize`:@@metadata:`;
        this.href = $localize`:@@hrefvalue:`;
        this.nameValue = 'Pandey';
        this.cdRef.detectChanges();
      });
  }

  message$ = this.click$
    .pipe(
      mergeMap((lang: any) => {
        console.log(lang);
        return this.i18n.loadTranslations(lang);
      })
    )

    .subscribe((translations) => {
      console.log(translations);
      loadTranslations(translations);
      this.welcome = $localize`:@@home.welcome:${this.name}:name:${this.messageCount}:messageCount:`;
      this.nameValue = 'Pandey';
      this.cdRef.detectChanges();
    });
  changeLanguage(lang: string) {
    this.click$.next(lang);
  }

  ngOnDestroy(): void {
    // this.localSubscription.unsubscribe();
  }
}
