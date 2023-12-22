import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxAntdJalaliComponent } from './ngx-antd-jalali.component';

describe('NgxAntdJalaliComponent', () => {
  let component: NgxAntdJalaliComponent;
  let fixture: ComponentFixture<NgxAntdJalaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAntdJalaliComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxAntdJalaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
