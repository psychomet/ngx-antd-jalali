/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Directive, Host, Optional } from '@angular/core';

import { NzDatePickerComponent } from './date-picker.component';

@Directive({
    selector: 'nz-month-picker',
    exportAs: 'nzMonthPicker',
    standalone: false
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzMonthPickerComponent {
  constructor(@Optional() @Host() public datePicker: NzDatePickerComponent) {
    this.datePicker.nzMode = 'month';
  }
}
