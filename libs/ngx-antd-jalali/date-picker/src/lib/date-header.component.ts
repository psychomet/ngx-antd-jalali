/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';

import { CandyDate, CandyDateFac } from 'ngx-antd-jalali/core';
import { DateHelperService } from 'ngx-antd-jalali/i18n';

import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import { transCompatFormat } from './util';

@Component({
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'date-header', // eslint-disable-line @angular-eslint/component-selector
    exportAs: 'dateHeader',
    templateUrl: './abstract-panel-header.html',
    standalone: false
})
export class DateHeaderComponent extends AbstractPanelHeader {
  constructor(
    private dateHelper: DateHelperService,
    @Inject(CandyDate) candyDate: CandyDateFac
  ) {
    super(candyDate);
  }

  getSelectors(): PanelSelector[] {
    return [
      {
        className: `${this.prefixCls}-year-btn`,
        title: this.locale.yearSelect,
        onClick: () => this.changeMode('year'),
        label: this.dateHelper.format(
          this.value.nativeDate,
          transCompatFormat(this.locale.yearFormat)
        ),
      },
      {
        className: `${this.prefixCls}-month-btn`,
        title: this.locale.monthSelect,
        onClick: () => this.changeMode('month'),
        label: this.dateHelper.format(
          this.value.nativeDate,
          this.locale.monthFormat || 'MMM'
        ),
      },
    ];
  }
}
