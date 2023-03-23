import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationService } from 'src/app/services/navigation.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let menuButton: HTMLButtonElement;
  const getOpenedNav = () =>
    fixture.nativeElement.querySelector('.header__navigation--opened');
  const getActiveMenu = () =>
    fixture.nativeElement.querySelector('.header__menu-button--active');

  const navigationService = jasmine.createSpyObj('NavigationService', [
    'scrollToSection'
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: NavigationService,
          useValue: navigationService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    menuButton = fixture.nativeElement.querySelector('.header__menu-button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all section links', () => {
    const links = fixture.nativeElement.querySelectorAll(
      '.header__section-link'
    );
    expect(links.length).toEqual(component.sections.length);
  });

  it('should navigate to the section after link click', () => {
    const link = fixture.nativeElement.querySelector('.header__section-link');
    link.click();

    fixture.detectChanges();

    expect(navigationService.scrollToSection).toHaveBeenCalled();
    expect(component.isNavVisible).toBeFalse();
  });

  it('should set active class to menu button', () => {
    menuButton.click();
    fixture.detectChanges();

    expect(getActiveMenu()).toBeTruthy();

    menuButton.click();
    fixture.detectChanges();

    expect(getActiveMenu()).toBeFalsy();
  });

  it('should open/close navigation in button click', () => {
    menuButton.click();
    fixture.detectChanges();

    expect(getOpenedNav()).toBeTruthy();

    menuButton.click();
    fixture.detectChanges();

    expect(getOpenedNav()).toBeFalsy();
  });
});
