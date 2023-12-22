import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { NzDateAdapter } from 'ngx-antd-jalali/core';
import { NZ_DATE_CONFIG } from 'ngx-antd-jalali/i18n';
import { JalaliMomentDateAdapter } from './nz-jalali-moment.adapter';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    { provide: NzDateAdapter, useClass: JalaliMomentDateAdapter },
    {
      provide: NZ_DATE_CONFIG,
      useValue: {
        displayFormats: {
          veryShortWeekLabel: 'dd',
          dateInput: 'yyyy/MM/DD',
          dateTimeInput: 'yyyy-MM-DD HH:mm:ss',
        },
      },
    },
  ],
};
