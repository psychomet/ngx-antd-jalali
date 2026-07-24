import { DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ngx-antd-jalali/date-picker';
import { NzTimePickerModule } from 'ngx-antd-jalali/time-picker';

@Component({
  selector: 'ngx-antd-jalali-root',
  imports: [FormsModule, NzDatePickerModule, NzTimePickerModule, JsonPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  date: Date | null = new Date();
  dateTime: Date | null = new Date();
  dateRange: [Date, Date] | null = null;
  month: Date | null = new Date();
  year: Date | null = new Date();
  week: Date | null = new Date();
  time: Date | null = new Date();
  time12h: Date | null = new Date();
  timeDisabled: Date | null = new Date();

  disabledDate = (current: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return current.getTime() < today.getTime();
  };

  disabledHours = (): number[] => [0, 1, 2, 3, 4, 5];

  onDateChange(value: Date | Date[] | null): void {
    console.log('date change:', value);
  }

  onTimeChange(value: Date | null): void {
    console.log('time change:', value);
  }
}
