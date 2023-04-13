import { TestBed } from '@angular/core/testing';
import { SectionId } from '../enums/section.enum';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should scroll to the selected element', () => {
    const element = document.createElement('section');
    element.id = 'testId';

    spyOn(document, 'getElementById').and.returnValue(element);
    spyOn(element, 'scrollIntoView');

    service.scrollToSection(element.id as SectionId);

    expect(element.scrollIntoView).toHaveBeenCalled();
  });
});
