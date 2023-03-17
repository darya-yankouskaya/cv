import { ElementRef } from '@angular/core';
import { AppearOnceDirective } from './appear-once.directive';

describe('AppearOnceDirective', () => {
  it('should create an instance', () => {
    const directive = new AppearOnceDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
