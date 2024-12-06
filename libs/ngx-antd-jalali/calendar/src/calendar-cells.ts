/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Directive } from '@angular/core';

@Directive({
    selector: '[nzDateCell]',
    exportAs: 'nzDateCell',
    standalone: false
})
export class NzDateCellDirective {}

@Directive({
    selector: '[nzMonthCell]',
    exportAs: 'nzMonthCell',
    standalone: false
})
export class NzMonthCellDirective {}

@Directive({
    selector: '[nzDateFullCell]',
    exportAs: 'nzDateFullCell',
    standalone: false
})
export class NzDateFullCellDirective {}

@Directive({
    selector: '[nzMonthFullCell]',
    exportAs: 'nzMonthFullCell',
    standalone: false
})
export class NzMonthFullCellDirective {}
