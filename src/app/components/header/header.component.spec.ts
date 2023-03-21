import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationService } from 'src/app/services/navigation.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const navigationService = jasmine.createSpyObj('NavigationService', [
    'scrollToSection',
    'observeSectionInterception'
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

    expect(navigationService.scrollToSection).toHaveBeenCalled();
  });

  it('should start section intersection observing', fakeAsync(() => {
    tick();

    expect(navigationService.observeSectionInterception).toHaveBeenCalled();
  }));
});
