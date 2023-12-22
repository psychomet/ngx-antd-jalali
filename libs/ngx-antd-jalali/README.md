<p align="center">
  <a href="http://ng.ant.design">
    <img width="230" src="https://img.alicdn.com/tfs/TB1TFFaHAvoK1RjSZFwXXciCFXa-106-120.svg">
  </a>
</p>

<h1 align="center">
ngx-antd-jalali <br>
Jalali Date Adapter
</h1>

<div align="center">

Angular DatePicker component library based on Ant Design.

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.com/package/nz-date-picker-jalali)
[![extension-for-VSCode](https://img.shields.io/badge/extension%20for-VSCode-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</div>

## [Demo](https://stackblitz.com/edit/ng-met-antd-datepicker)

View DatePickerJalali in action at [Stackblitz Demo](https://stackblitz.com/edit/ng-met-antd-datepicker)

<img src="https://user-images.githubusercontent.com/42533472/171279996-75478af5-7977-4845-bf56-846c448308ae.gif" alt="jalali-date-picker" style="max-width: 100%; display: inline-block;" data-target="animated-image.originalImage">

## 🖥 Environment Support

- Angular `^17.0.0` [![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd)
- Server-side Rendering
- Modern browsers including the following [specific versions](https://angular.io/guide/browser-support)

## 📦 Installation

```bash
$ npm install ng-zorro-antd
$ npm install ngx-antd-jalali jalali-moment
```

## Provide custom DateAdapter

If you need to present another calendar like [Jalali](https://en.wikipedia.org/wiki/Jalali_calendar) or [Hijri](https://en.wikipedia.org/wiki/Islamic_calendar), you can provide a custom NzDateAdapter which implements required methods to deal with native date object.

### Example

```ts
import { NzDateAdapter } from 'ngx-antd-jalali/core';

export class CustomDateAdapter extends NzDateAdapter<any> {
  // implementation of abstract methods
}

@NgModule({
  providers: [{ provide: NzDateAdapter, useClass: CustomDateAdapter }],
})
export class AppModule {}
```

#### Sample

[Jalali-Moment date adapter](https://gist.github.com/psychomet/22798ab7552b38751ac44a665fe1c512)
