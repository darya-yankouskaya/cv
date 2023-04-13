import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;
  let contentElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    contentElem = fixture.nativeElement.querySelector('.introduction__content');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title h1', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent).toContain('Hi! I am');
  });

  it('should render name', () => {
    const elem: HTMLElement = fixture.nativeElement.querySelector(
      '.introduction__name'
    );
    fixture.detectChanges();

    expect(elem.textContent).toEqual(component.name);
  });

  it('should react on window scroll and change content styles', () => {
    window.scrollTo(0, 30);
    window.dispatchEvent(new Event('scroll'));

    fixture.detectChanges();

    expect(+contentElem.style.opacity).toEqual(component.ratio);
    expect(component.ratio).not.toEqual(1);

    expect(contentElem.style.transform).toEqual(component.transform);
    expect(component.transform).not.toEqual('translate3d(0px, 0px, 0px)');
  });
});
