import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Theme } from 'src/app/enums/theme.enum';

import { CustomizerComponent } from './customizer.component';

describe('CustomizerComponent', () => {
  let component: CustomizerComponent;
  let fixture: ComponentFixture<CustomizerComponent>;
  let defaultThemeButton: HTMLButtonElement;
  let darkThemeButton: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizerComponent, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizerComponent);
    component = fixture.componentInstance;
    defaultThemeButton = fixture.nativeElement.querySelector(
      '.customizer__theme-button--default'
    );
    darkThemeButton = fixture.nativeElement.querySelector(
      '.customizer__theme-button--dark'
    );

    fixture.detectChanges();
  });

  afterEach(() => {
    document.body.classList.remove('dark-theme');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const h4: HTMLElement = fixture.nativeElement.querySelector('h4');

    expect(h4.textContent).toBeTruthy();
  });

  it('theme buttons should render right title value', () => {
    expect(darkThemeButton.textContent).toContain('Dark');
    expect(defaultThemeButton.textContent).toContain('Default');
  });

  it('theme button should be disabled if theme is selected', () => {
    darkThemeButton.click();

    fixture.detectChanges();

    expect(darkThemeButton.disabled).toBeTruthy();
  });

  it('should change theme on buttons click', () => {
    darkThemeButton.click();

    expect(component.selectedTheme).toBe(Theme.Dark);
    expect(document.body.classList).toContain('dark-theme');

    fixture.detectChanges();

    defaultThemeButton.click();

    expect(component.selectedTheme).toBe(Theme.Default);
    expect(document.body.classList).not.toContain('dark-theme');
  });

  it('should open/close menu on switcher click', () => {
    const btn = fixture.nativeElement.querySelector('.customizer__button');

    btn.click();

    expect(component.isOpen).toBeTrue();

    btn.click();

    expect(component.isOpen).toBeFalse();
  });
});
