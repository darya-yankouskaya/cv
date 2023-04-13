import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppearOnceDirective } from 'src/app/directives/appear-once.directive';

import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;
  let expectedTitle: string;
  let expectedPercent: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarComponent, AppearOnceDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    expectedTitle = 'Test Title';
    expectedPercent = 90;

    component.title = expectedTitle;
    component.percent = expectedPercent;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const elem: HTMLElement =
      fixture.nativeElement.querySelector('.bar__title');

    expect(elem.textContent).toEqual(component.title);
  });

  it('should render percentage', () => {
    const elem: HTMLElement =
      fixture.nativeElement.querySelector('.bar__percent');

    expect(elem.textContent).toContain(component.percent);
  });

  it('should change bar filling scale property if component appears', () => {
    component.onBarAppear();

    expect(component.scaleX).toEqual(expectedPercent / 100);
  });
});
