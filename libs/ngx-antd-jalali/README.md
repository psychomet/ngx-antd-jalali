<p align="center">
  <a href="http://ng.ant.design">
    <img width="230" src="https://img.alicdn.com/tfs/TB1TFFaHAvoK1RjSZFwXXciCFXa-106-120.svg">
  </a>
</p>

<h1 align="center">
ngx-antd-jalali <br>
Jalali Date Adapter for NG-ZORRO
</h1>

<div align="center">

Angular Jalali (Persian) date picker, time picker, and calendar based on [NG-ZORRO](https://ng.ant.design) / Ant Design.

[![npm package](https://img.shields.io/npm/v/ngx-antd-jalali.svg?style=flat-square)](https://www.npmjs.com/package/ngx-antd-jalali)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/npm/l/ngx-antd-jalali.svg?style=flat-square)](https://github.com/psychomet/ngx-antd-jalali/blob/master/LICENSE)

</div>

## Demo

View DatePickerJalali in action at [StackBlitz Demo](https://stackblitz.com/edit/ng-met-antd-datepicker)

<img src="https://user-images.githubusercontent.com/42533472/171279996-75478af5-7977-4845-bf56-846c448308ae.gif" alt="jalali-date-picker" style="max-width: 100%; display: inline-block;">

## Features

- Jalali calendar support via a custom `NzDateAdapter`
- Drop-in NG-ZORRO style date picker, range picker, month/year/week pickers
- Time picker and calendar modules
- Persian (`fa_IR`) and other locales via `ngx-antd-jalali/i18n`

## Environment Support

- Angular `^22.0.0`
- [ng-zorro-antd](https://www.npmjs.com/package/ng-zorro-antd) `^22.0.0`
- Modern browsers ([Angular browser support](https://angular.dev/reference/versions#browser-support))

## Installation

```bash
npm install ng-zorro-antd ngx-antd-jalali jalali-moment
# or
yarn add ng-zorro-antd ngx-antd-jalali jalali-moment
```

Also import NG-ZORRO styles in your app (for example in `styles`):

```less
@import 'ng-zorro-antd/ng-zorro-antd.min.css';
```

## Usage

### 1. Provide a Jalali date adapter

Implement `NzDateAdapter` (or reuse a Moment/Jalali adapter) and register it in your application config:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NzDateAdapter } from 'ngx-antd-jalali/core';
import { NZ_DATE_CONFIG } from 'ngx-antd-jalali/i18n';
import { JalaliMomentDateAdapter } from './nz-jalali-moment.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
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
```

Sample adapter: [Jalali-Moment date adapter](https://gist.github.com/psychomet/22798ab7552b38751ac44a665fe1c512)

### 2. Import and use the picker

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ngx-antd-jalali/date-picker';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NzDatePickerModule],
  template: `<nz-date-picker [(ngModel)]="date" [nzShowTime]="true"></nz-date-picker>`,
})
export class AppComponent {
  date = new Date();
}
```

## Package entry points

| Import path | Description |
| --- | --- |
| `ngx-antd-jalali/core` | `NzDateAdapter`, `CandyDate`, config helpers |
| `ngx-antd-jalali/i18n` | Locale tokens, pipes, date display config |
| `ngx-antd-jalali/date-picker` | Date / range / month / year / week pickers |
| `ngx-antd-jalali/time-picker` | Time picker |
| `ngx-antd-jalali/calendar` | Calendar |

## Custom DateAdapter

If you need another calendar (Jalali, Hijri, …), provide a custom `NzDateAdapter` that implements the abstract date methods:

```ts
import { NzDateAdapter } from 'ngx-antd-jalali/core';

export class CustomDateAdapter extends NzDateAdapter<any> {
  // implement abstract methods
}

// standalone
providers: [{ provide: NzDateAdapter, useClass: CustomDateAdapter }];
```

## License

MIT
