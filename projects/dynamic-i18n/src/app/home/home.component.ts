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
  heading2: string | undefined;
  metaData2: string | undefined;
  submit2: string | undefined;
  div2: string | undefined;
  href2: string | undefined;
  options2: any | undefined;
  placeholder2: string | undefined;
  imageValue2: string | undefined;
  heading3: string | undefined;
  metaData3: string | undefined;
  submit3: string | undefined;
  div3: string | undefined;
  href3: string | undefined;
  options3: any | undefined;
  placeholder3: string | undefined;
  imageValue3: string | undefined;
  heading4: string | undefined;
  metaData4: string | undefined;
  submit4: string | undefined;
  div4: string | undefined;
  href4: string | undefined;
  options4: any | undefined;
  placeholder4: string | undefined;
  imageValue4: string | undefined;
  heading5: string | undefined;
  metaData5: string | undefined;
  submit5: string | undefined;
  div5: string | undefined;
  href5: string | undefined;
  options5: any | undefined;
  placeholder5: string | undefined;
  imageValue5: string | undefined;
  heading6: string | undefined;
  metaData6: string | undefined;
  submit6: string | undefined;
  div6: string | undefined;
  href6: string | undefined;
  options6: any;
  placeholder6: string | undefined;
  imageValue6: string | undefined;
  heading7: string | undefined;
  metaData7: string | undefined;
  submit7: string | undefined;
  div7: string | undefined;
  href7: string | undefined;
  options7: any | undefined;
  placeholder7: string | undefined;
  imageValue7: string | undefined;
  heading8: string | undefined;
  metaData8: string | undefined;
  submit8: string | undefined;
  div8: string | undefined;
  href8: string | undefined;
  options8: any | undefined;
  placeholder8: string | undefined;
  imageValue8: string | undefined;
  heading9: string | undefined;
  metaData9: string | undefined;
  submit9: string | undefined;
  div9: string | undefined;
  href9: string | undefined;
  options9: any | undefined;
  placeholder9: string | undefined;
  imageValue9: string | undefined;
  heading10: string | undefined;
  metaData10: string | undefined;
  submit10: string | undefined;
  div10: string | undefined;
  href10: string | undefined;
  options10: any | undefined;
  placeholder10: string | undefined;
  imageValue10: string | undefined;
  heading11: string | undefined;
  metaData11: string | undefined;
  submit11: string | undefined;
  div11: string | undefined;
  href11: string | undefined;
  options11: any | undefined;
  placeholder11: string | undefined;
  imageValue11: string | undefined;
  heading12: string | undefined;
  metaData12: string | undefined;
  submit12: string | undefined;
  div12: string | undefined;
  href12: string | undefined;
  options12: any | undefined;
  placeholder12: string | undefined;
  imageValue12: string | undefined;
  heading13: string | undefined;
  metaData13: string | undefined;
  submit13: string | undefined;
  div13: string | undefined;
  href13: string | undefined;
  options13: any | undefined;
  placeholder13: string | undefined;
  imageValue13: string | undefined;
  heading14: string | undefined;
  metaData14: string | undefined;
  submit14: string | undefined;
  div14: string | undefined;
  href14: string | undefined;
  options14: any | undefined;
  placeholder14: string | undefined;
  imageValue14: string | undefined;
  heading15: string | undefined;
  metaData15: string | undefined;
  submit15: string | undefined;
  div15: string | undefined;
  href15: string | undefined;
  options15: any | undefined;
  placeholder15: string | undefined;
  imageValue15: string | undefined;

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
        this.heading1 = $localize`:@@heading1:${translations['heading1']}`;
        this.metaData1 = $localize`:@@metadata1:${translations['metadata1']}`;
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

        this.heading2 = $localize`:@@heading2:${translations['heading2']}`;
        this.metaData2 = $localize`:@@metadata2:${translations['metadata2']}`;

        this.submit2 = $localize`:@@submit2:${translations['submit2']}`;
        this.div2 = $localize`:@@div2:${translations['div2']}`;
        this.href2 = $localize`:@@hrefvalue2:${translations['hrefvalue2']}`;
        this.options2 = translations['company.options2'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder2 = $localize`:@@input.placeholder2:${translations['input.placeholder2']}`;
        this.imageValue2 = $localize`:@@image.alt2:${translations['image.alt2']}`;

        this.heading3 = $localize`:@@heading3:${translations['heading3']}`;
        this.metaData3 = $localize`:@@metadata3:${translations['metadata3']}`;

        this.submit3 = $localize`:@@submit3:${translations['submit3']}`;
        this.div3 = $localize`:@@div3:${translations['div3']}`;
        this.href3 = $localize`:@@hrefvalue3:${translations['hrefvalue3']}`;
        this.options3 = translations['company.options2'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder3 = $localize`:@@input.placeholder3:${translations['input.placeholder3']}`;
        this.imageValue3 = $localize`:@@image.alt3:${translations['image.alt3']}`;

        this.heading4 = $localize`:@@heading4:${translations['heading4']}`;
        this.metaData4 = $localize`:@@metadata4:${translations['metadata4']}`;

        this.submit4 = $localize`:@@submit4:${translations['submit4']}`;
        this.div4 = $localize`:@@div4:${translations['div4']}`;
        this.href4 = $localize`:@@hrefvalue4:${translations['hrefvalue4']}`;
        this.options4 = translations['company.options4'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder4 = $localize`:@@input.placeholder4:${translations['input.placeholder4']}`;
        this.imageValue4 = $localize`:@@image.alt4:${translations['image.alt4']}`;

        this.heading5 = $localize`:@@heading5:${translations['heading5']}`;
        this.metaData5 = $localize`:@@metadata5:${translations['metadata5']}`;

        this.submit5 = $localize`:@@submit5:${translations['submit5']}`;
        this.div5 = $localize`:@@div5:${translations['div5']}`;
        this.href5 = $localize`:@@hrefvalue5:${translations['hrefvalue5']}`;
        this.options5 = translations['company.options5'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder5 = $localize`:@@input.placeholder5:${translations['input.placeholder5']}`;
        this.imageValue5 = $localize`:@@image.alt5:${translations['image.alt5']}`;
        this.heading6 = $localize`:@@heading6:${translations['heading6']}`;
        this.metaData6 = $localize`:@@metadata6:${translations['metadata6']}`;

        this.submit6 = $localize`:@@submit6:${translations['submit6']}`;
        this.div6 = $localize`:@@div6:${translations['div6']}`;
        this.href6 = $localize`:@@hrefvalue6:${translations['hrefvalue6']}`;
        this.options6 = translations['company.options6'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder6 = $localize`:@@input.placeholder6:${translations['input.placeholder6']}`;
        this.imageValue6 = $localize`:@@image.alt6:${translations['image.alt6']}`;

        this.heading7 = $localize`:@@heading7:${translations['heading7']}`;
        this.metaData7 = $localize`:@@metadata7:${translations['metadata7']}`;

        this.submit7 = $localize`:@@submit7:${translations['submit7']}`;
        this.div7 = $localize`:@@div7:${translations['div7']}`;
        this.href7 = $localize`:@@hrefvalue7:${translations['hrefvalue7']}`;
        this.options7 = translations['company.options7'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder7 = $localize`:@@input.placeholder7:${translations['input.placeholder7']}`;
        this.imageValue7 = $localize`:@@image.alt7:${translations['image.alt7']}`;

        this.heading8 = $localize`:@@heading8:${translations['heading8']}`;
        this.metaData8 = $localize`:@@metadata8:${translations['metadata8']}`;

        this.submit8 = $localize`:@@submit8:${translations['submit8']}`;
        this.div8 = $localize`:@@div8:${translations['div8']}`;
        this.href8 = $localize`:@@hrefvalue8:${translations['hrefvalue8']}`;
        this.options8 = translations['company.options8'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder8 = $localize`:@@input.placeholder8:${translations['input.placeholder8']}`;
        this.imageValue8 = $localize`:@@image.alt8:${translations['image.alt8']}`;

        this.heading9 = $localize`:@@heading9:${translations['heading9']}`;
        this.metaData9 = $localize`:@@metadata9:${translations['metadata9']}`;

        this.submit9 = $localize`:@@submit9:${translations['submit9']}`;
        this.div9 = $localize`:@@div9:${translations['div9']}`;
        this.href9 = $localize`:@@hrefvalue9:${translations['hrefvalue9']}`;
        this.options9 = translations['company.options9'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder9 = $localize`:@@input.placeholder9:${translations['input.placeholder9']}`;
        this.imageValue9 = $localize`:@@image.alt9:${translations['image.alt9']}`;

        this.heading10 = $localize`:@@heading10:${translations['heading10']}`;
        this.metaData10 = $localize`:@@metadata10:${translations['metadata10']}`;

        this.submit10 = $localize`:@@submit10:${translations['submit10']}`;
        this.div10 = $localize`:@@div10:${translations['div10']}`;
        this.href10 = $localize`:@@hrefvalue10:${translations['hrefvalue10']}`;
        this.options10 = translations['company.options10'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder10 = $localize`:@@input.placeholder10:${translations['input.placeholder10']}`;
        this.imageValue10 = $localize`:@@image.alt10:${translations['image.alt10']}`;

        this.heading11 = $localize`:@@heading11:${translations['heading11']}`;
        this.metaData11 = $localize`:@@metadata11:${translations['metadata11']}`;

        this.submit11 = $localize`:@@submit11:${translations['submit11']}`;
        this.div11 = $localize`:@@div11:${translations['div11']}`;
        this.href11 = $localize`:@@hrefvalue11:${translations['hrefvalue11']}`;
        this.options11 = translations['company.options11'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder11 = $localize`:@@input.placeholder11:${translations['input.placeholder11']}`;
        this.imageValue11 = $localize`:@@image.alt11:${translations['image.alt11']}`;

        this.heading12 = $localize`:@@heading12:${translations['heading12']}`;
        this.metaData12 = $localize`:@@metadata12:${translations['metadata12']}`;

        this.submit12 = $localize`:@@submit12:${translations['submit12']}`;
        this.div12 = $localize`:@@div12:${translations['div12']}`;
        this.href12 = $localize`:@@hrefvalue12:${translations['hrefvalue12']}`;
        this.options12 = translations['company.options12'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder12 = $localize`:@@input.placeholder12:${translations['input.placeholder12']}`;
        this.imageValue12 = $localize`:@@image.alt12:${translations['image.alt12']}`;

        this.heading13 = $localize`:@@heading13:${translations['heading13']}`;
        this.metaData13 = $localize`:@@metadata13:${translations['metadata13']}`;

        this.submit13 = $localize`:@@submit13:${translations['submit13']}`;
        this.div13 = $localize`:@@div13:${translations['div13']}`;
        this.href13 = $localize`:@@hrefvalue13:${translations['hrefvalue13']}`;
        this.options13 = translations['company.options13'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder13 = $localize`:@@input.placeholder13:${translations['input.placeholder13']}`;
        this.imageValue13 = $localize`:@@image.alt13:${translations['image.alt13']}`;

        this.heading14 = $localize`:@@heading14:${translations['heading14']}`;
        this.metaData14 = $localize`:@@metadata14:${translations['metadata14']}`;

        this.submit14 = $localize`:@@submit14:${translations['submit14']}`;
        this.div14 = $localize`:@@div14:${translations['div14']}`;
        this.href14 = $localize`:@@hrefvalue14:${translations['hrefvalue14']}`;
        this.options14 = translations['company.options14'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder14 = $localize`:@@input.placeholder14:${translations['input.placeholder14']}`;
        this.imageValue14 = $localize`:@@image.alt14:${translations['image.alt14']}`;

        this.heading15 = $localize`:@@heading15:${translations['heading15']}`;
        this.metaData15 = $localize`:@@metadata15:${translations['metadata15']}`;

        this.submit15 = $localize`:@@submit15:${translations['submit15']}`;
        this.div15 = $localize`:@@div15:${translations['div15']}`;
        this.href15 = $localize`:@@hrefvalue15:${translations['hrefvalue15']}`;
        this.options15 = translations['company.options15'].map((ele: any) => {
          return {
            id: ele,
            value: $localize`${ele}`,
          };
        });
        this.placeholder15 = $localize`:@@input.placeholder15:${translations['input.placeholder15']}`;
        this.imageValue15 = $localize`:@@image.alt15:${translations['image.alt15']}`;

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
      this.heading1 = $localize`:@@heading1:${translations['heading1']}`;
      this.metaData1 = $localize`:@@metadata1:${translations['metadata1']}`;

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
      this.heading2 = $localize`:@@heading2:${translations['heading2']}`;
      this.metaData2 = $localize`:@@metadata2:${translations['metadata2']}`;

      this.submit2 = $localize`:@@submit2:${translations['submit2']}`;
      this.div2 = $localize`:@@div2:${translations['div2']}`;
      this.href2 = $localize`:@@hrefvalue2:${translations['hrefvalue2']}`;
      this.options2 = translations['company.options2'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder2 = $localize`:@@input.placeholder2:${translations['input.placeholder2']}`;
      this.imageValue2 = $localize`:@@image.alt2:${translations['image.alt2']}`;

      this.heading3 = $localize`:@@heading3:${translations['heading3']}`;
      this.metaData3 = $localize`:@@metadata3:${translations['metadata3']}`;

      this.submit3 = $localize`:@@submit3:${translations['submit3']}`;
      this.div3 = $localize`:@@div3:${translations['div3']}`;
      this.href3 = $localize`:@@hrefvalue3:${translations['hrefvalue3']}`;
      this.options3 = translations['company.options2'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder3 = $localize`:@@input.placeholder3:${translations['input.placeholder3']}`;
      this.imageValue3 = $localize`:@@image.alt3:${translations['image.alt3']}`;

      this.heading4 = $localize`:@@heading4:${translations['heading4']}`;
      this.metaData4 = $localize`:@@metadata4:${translations['metadata4']}`;

      this.submit4 = $localize`:@@submit4:${translations['submit4']}`;
      this.div4 = $localize`:@@div4:${translations['div4']}`;
      this.href4 = $localize`:@@hrefvalue4:${translations['hrefvalue4']}`;
      this.options4 = translations['company.options4'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder4 = $localize`:@@input.placeholder4:${translations['input.placeholder4']}`;
      this.imageValue4 = $localize`:@@image.alt4:${translations['image.alt4']}`;

      this.heading5 = $localize`:@@heading5:${translations['heading5']}`;
      this.metaData5 = $localize`:@@metadata5:${translations['metadata5']}`;

      this.submit5 = $localize`:@@submit5:${translations['submit5']}`;
      this.div5 = $localize`:@@div5:${translations['div5']}`;
      this.href5 = $localize`:@@hrefvalue5:${translations['hrefvalue5']}`;
      this.options5 = translations['company.options5'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder5 = $localize`:@@input.placeholder5:${translations['input.placeholder5']}`;
      this.imageValue5 = $localize`:@@image.alt5:${translations['image.alt5']}`;

      this.heading6 = $localize`:@@heading6:${translations['heading6']}`;
      this.metaData6 = $localize`:@@metadata6:${translations['metadata6']}`;

      this.submit6 = $localize`:@@submit6:${translations['submit6']}`;
      this.div6 = $localize`:@@div6:${translations['div6']}`;
      this.href6 = $localize`:@@hrefvalue6:${translations['hrefvalue6']}`;
      this.options6 = translations['company.options6'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder6 = $localize`:@@input.placeholder6:${translations['input.placeholder6']}`;
      this.imageValue6 = $localize`:@@image.alt6:${translations['image.alt6']}`;

      this.heading7 = $localize`:@@heading7:`;
      this.metaData7 = $localize`:@@metadata7:`;
      this.submit7 = $localize`:@@submit7:${translations['submit7']}`;
      this.div7 = $localize`:@@div7:${translations['div7']}`;
      this.href7 = $localize`:@@hrefvalue7:${translations['hrefvalue7']}`;
      this.options7 = translations['company.options7'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder7 = $localize`:@@input.placeholder7:${translations['input.placeholder7']}`;
      this.imageValue7 = $localize`:@@image.alt7:${translations['image.alt7']}`;

      this.heading8 = $localize`:@@heading8:${translations['heading8']}`;
      this.metaData8 = $localize`:@@metadata8:${translations['metadata8']}`;

      this.submit8 = $localize`:@@submit8:${translations['submit8']}`;
      this.div8 = $localize`:@@div8:${translations['div8']}`;
      this.href8 = $localize`:@@hrefvalue8:${translations['hrefvalue8']}`;
      this.options8 = translations['company.options8'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder8 = $localize`:@@input.placeholder8:${translations['input.placeholder8']}`;
      this.imageValue8 = $localize`:@@image.alt8:${translations['image.alt8']}`;

      this.heading9 = $localize`:@@heading9:${translations['heading9']}`;
      this.metaData9 = $localize`:@@metadata9:${translations['metadata9']}`;

      this.submit9 = $localize`:@@submit9:${translations['submit9']}`;
      this.div9 = $localize`:@@div9:${translations['div9']}`;
      this.href9 = $localize`:@@hrefvalue9:${translations['hrefvalue9']}`;
      this.options9 = translations['company.options9'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder9 = $localize`:@@input.placeholder9:${translations['input.placeholder9']}`;
      this.imageValue9 = $localize`:@@image.alt9:${translations['image.alt9']}`;

      this.heading10 = $localize`:@@heading10:${translations['heading10']}`;
      this.metaData10 = $localize`:@@metadata10:${translations['metadata10']}`;

      this.submit10 = $localize`:@@submit10:${translations['submit10']}`;
      this.div10 = $localize`:@@div10:${translations['div10']}`;
      this.href10 = $localize`:@@hrefvalue10:${translations['hrefvalue10']}`;
      this.options10 = translations['company.options10'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder10 = $localize`:@@input.placeholder10:${translations['input.placeholder10']}`;
      this.imageValue10 = $localize`:@@image.alt10:${translations['image.alt10']}`;

      this.heading11 = $localize`:@@heading11:${translations['heading11']}`;
      this.metaData11 = $localize`:@@metadata11:${translations['metadata11']}`;

      this.submit11 = $localize`:@@submit11:${translations['submit11']}`;
      this.div11 = $localize`:@@div11:${translations['div11']}`;
      this.href11 = $localize`:@@hrefvalue11:${translations['hrefvalue11']}`;
      this.options11 = translations['company.options11'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder11 = $localize`:@@input.placeholder11:${translations['input.placeholder11']}`;
      this.imageValue11 = $localize`:@@image.alt11:${translations['image.alt11']}`;

      this.heading12 = $localize`:@@heading12:${translations['heading12']}`;
      this.metaData12 = $localize`:@@metadata12:${translations['metadata12']}`;

      this.submit12 = $localize`:@@submit12:${translations['submit12']}`;
      this.div12 = $localize`:@@div12:${translations['div12']}`;
      this.href12 = $localize`:@@hrefvalue12:${translations['hrefvalue12']}`;
      this.options12 = translations['company.options12'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder12 = $localize`:@@input.placeholder12:${translations['input.placeholder12']}`;
      this.imageValue12 = $localize`:@@image.alt12:${translations['image.alt12']}`;

      this.heading13 = $localize`:@@heading13:${translations['heading13']}`;
      this.metaData13 = $localize`:@@metadata13:${translations['metadata13']}`;

      this.submit13 = $localize`:@@submit13:${translations['submit13']}`;
      this.div13 = $localize`:@@div13:${translations['div13']}`;
      this.href13 = $localize`:@@hrefvalue13:${translations['hrefvalue13']}`;
      this.options13 = translations['company.options13'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder13 = $localize`:@@input.placeholder13:${translations['input.placeholder13']}`;
      this.imageValue13 = $localize`:@@image.alt13:${translations['image.alt13']}`;

      this.heading14 = $localize`:@@heading14:${translations['heading14']}`;
      this.metaData14 = $localize`:@@metadata14:${translations['metadata14']}`;

      this.submit14 = $localize`:@@submit14:${translations['submit14']}`;
      this.div14 = $localize`:@@div14:${translations['div14']}`;
      this.href14 = $localize`:@@hrefvalue14:${translations['hrefvalue14']}`;
      this.options14 = translations['company.options14'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder14 = $localize`:@@input.placeholder14:${translations['input.placeholder14']}`;
      this.imageValue14 = $localize`:@@image.alt14:${translations['image.alt14']}`;

      this.heading15 = $localize`:@@heading15:${translations['heading15']}`;
      this.metaData15 = $localize`:@@metadata15:${translations['metadata15']}`;

      this.submit15 = $localize`:@@submit15:${translations['submit15']}`;
      this.div15 = $localize`:@@div15:${translations['div15']}`;
      this.href15 = $localize`:@@hrefvalue15:${translations['hrefvalue15']}`;
      this.options15 = translations['company.options15'].map((ele: any) => {
        return {
          id: ele,
          value: $localize`${ele}`,
        };
      });
      this.placeholder15 = $localize`:@@input.placeholder15:${translations['input.placeholder15']}`;
      this.imageValue15 = $localize`:@@image.alt15:${translations['image.alt15']}`;

      this.cdRef.detectChanges();
    });
  changeLanguage(lang: string) {
    this.click$.next(lang);
  }

  ngOnDestroy(): void {
    // this.localSubscription.unsubscribe();
  }
}
