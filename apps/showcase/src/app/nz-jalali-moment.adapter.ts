import { Injectable } from '@angular/core';
import moment, { Moment } from 'jalali-moment';

import StartOf = moment.unitOfTime.StartOf;
import { DateMode, NzDateAdapter } from 'ngx-antd-jalali/core';

@Injectable()
export class JalaliMomentDateAdapter extends NzDateAdapter<Moment> {
  constructor() {
    super();
    moment.locale('fa');
    moment.updateLocale('fa', {
      weekdaysMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
    });
  }

  toNativeDate(input: Moment): Date {
    return input.toDate();
  }

  today(): Moment {
    return moment();
  }

  deserialize(input: string | number): Moment {
    return moment(input);
  }

  calendarStartOfWeek(date: Moment): Moment {
    return date.clone().startOf('week');
  }

  calendarStartOfMonth(date: Moment): Moment {
    return date.clone().startOf('month');
  }

  getYear(date: Moment): number {
    return date.get('year');
  }

  getMonth(date: Moment): number {
    return date.get('month');
  }

  getDay(date: Moment): number {
    return date.get('day');
  }

  getTime(date: Moment): number {
    return date.toDate().getTime();
  }

  getDate(date: Moment): number {
    return date.get('date');
  }

  getHours(date: Moment): number {
    return date.get('hours');
  }

  getMinutes(date: Moment): number {
    return date.get('minutes');
  }

  getSeconds(date: Moment): number {
    return date.get('seconds');
  }

  getMilliseconds(date: Moment): number {
    return date.get('milliseconds');
  }

  clone(date: Moment): Moment {
    return date.clone();
  }

  setHms(date: Moment, hour: number, minute: number, second: number): Moment {
    return date.clone().hour(hour).minute(minute).second(second);
  }

  setYear(date: Moment, year: number): Moment {
    return date.clone().year(year);
  }

  addYears(date: Moment, amount: number): Moment {
    return date.clone().add(amount, 'years');
  }

  addDays(date: Moment, amount: number): Moment {
    return date.clone().add(amount, 'days');
  }

  addMonths(date: Moment, amount: number): Moment {
    return date.clone().add(amount, 'months');
  }

  setDate(date: Moment, amount: number): Moment {
    return date.clone().date(amount);
  }

  setDay(date: Moment, day: number): Moment {
    return date.clone().day(day);
  }

  setMonth(date: Moment, month: number): Moment {
    return date.clone().month(month);
  }

  isSame(first: Moment, second: Moment, mode: DateMode): boolean {
    return first.isSame(second, (mode as StartOf) ?? 'day');
  }

  isBefore(first: Moment, second: Moment, mode: DateMode): boolean {
    return first.isBefore(second, (mode as StartOf) ?? 'day');
  }

  isToday(date: Moment): boolean {
    return date.isSame(new Date(), 'day');
  }

  isValid(date: Moment): boolean {
    return date.isValid();
  }

  isFirstDayOfMonth(date: Moment): boolean {
    return date.isSame(moment().startOf('month'));
  }

  isLastDayOfMonth(date: Moment): boolean {
    return date.isSame(moment().endOf('month'));
  }

  format(date: Date, displayFormat: string): string {
    return moment(date).format(displayFormat);
  }

  getISOWeek(date: Date): number {
    return moment(date).week();
  }

  parse(
    text: string,
    formatStr: string,
    options: { locale: Locale; weekStartsOn: number } | undefined
  ): Moment {
    return moment(text, formatStr, options?.locale.toString());
  }
}
