import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, mergeMap } from 'rxjs';
import { I18N_SERVICE } from '../services/ii18n-loader';
import { I18nLoaderService } from '../services/i18n-loader.service';
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.scss',
})
export class Home3Component {
  messageCount = 9;
  name = 'Sudhir';
  welcome: string | undefined;
  localSubscription: Subscription | undefined;
  nameValue = 'Prateek';
  click$ = new Subject<string>();
  heading: string | undefined;
  metaData: string | undefined;
  href: string | undefined;
  options: any[] | undefined;
  placeholder: string | undefined;
  imageValue: string | undefined;
  submit: string | undefined;
  div: string | undefined;
  welcome1: string | undefined;
  heading1: string | undefined;
  metaData1: string | undefined;
  submit1: string | undefined;
  div1: string | undefined;
  href1: string | undefined;
  options1: any | undefined;
  placeholder1: string | undefined;
  imageValue1: string | undefined;

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
        // loadTranslations(translations);
        this.welcome = $localize`:@@home.welcome:${this.name}:name:${this.messageCount}:messageCount:`;
        this.heading = $localize`:@@heading:`;
        this.metaData = $localize`:@@metadata:`;
        this.submit = $localize`:@@submit:${translations['submit']}`;
        this.div = $localize`:@@div:${translations['div']}`;
        this.href = $localize`:@@hrefvalue:${translations['hrefvalue']}`;
        this.options = translations['company.options'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder = $localize`:@@input.placeholder:${translations['input.placeholder']}`;
        this.imageValue = $localize`:@@image.alt:${translations['image.alt']}`;

        this.nameValue = 'Pandey';

        this.welcome1 = $localize`:@@home.welcome1:${this.name}:name:${this.messageCount}:messageCount:`;
        this.heading1 = $localize`:@@heading1:`;
        this.metaData1 = $localize`:@@metadata1:`;
        this.submit1 = $localize`:@@submit1:${translations['submit1']}`;
        this.div1 = $localize`:@@div1:${translations['div1']}`;
        this.href1 = $localize`:@@hrefvalue1:${translations['hrefvalue1']}`;
        this.options1 = translations['company.options1'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder1 = $localize`:@@input.placeholder1:${translations['input.placeholder1']}`;
        this.imageValue1 = $localize`:@@image.alt1:${translations['image.alt1']}`;

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
      // loadTranslations(translations);
      this.welcome = $localize`:@@home.welcome:${this.name}:name:${this.messageCount}:messageCount:`;
      this.heading = $localize`:@@heading:`;
      this.metaData = $localize`:@@metadata:`;
      this.submit = $localize`:@@submit:${translations['submit']}`;
      this.div = $localize`:@@div:${translations['div']}`;
      this.href = $localize`:@@hrefvalue:${translations['hrefvalue']}`;
      this.options = translations['company.options'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder = $localize`:@@input.placeholder:${translations['input.placeholder']}`;
      this.imageValue = $localize`:@@image.alt:${translations['image.alt']}`;

      this.nameValue = 'Pandey';
      this.welcome1 = $localize`:@@home.welcome1:${this.name}:name:${this.messageCount}:messageCount:`;
      this.heading1 = $localize`:@@heading1:`;
      this.metaData1 = $localize`:@@metadata1:`;
      this.submit1 = $localize`:@@submit1:${translations['submit1']}`;
      this.div1 = $localize`:@@div1:${translations['div1']}`;
      this.href1 = $localize`:@@hrefvalue1:${translations['hrefvalue1']}`;
      this.options1 = translations['company.options1'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder1 = $localize`:@@input.placeholder1:${translations['input.placeholder1']}`;
      this.imageValue1 = $localize`:@@image.alt1:${translations['image.alt1']}`;

      this.cdRef.detectChanges();
    });
  changeLanguage(lang: string) {
    this.click$.next(lang);
  }

  ngOnDestroy(): void {
    // this.localSubscription.unsubscribe();
  }
}
