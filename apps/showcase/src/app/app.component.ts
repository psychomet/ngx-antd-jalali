import { Component } from '@angular/core';
import { NzDatePickerModule } from 'ngx-antd-jalali/date-picker';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [NzDatePickerModule, FormsModule],
    selector: 'ngx-antd-jalali-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
  date = new Date();

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
