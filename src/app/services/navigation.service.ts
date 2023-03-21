import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SECTIONS } from '../constants/sections.constants';
import { SectionId } from '../enums/section.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public _activeSectionId$ = new Subject<SectionId>();
  private observers: IntersectionObserver[] = [];

  get activeSectionId$() {
    return this._activeSectionId$.asObservable();
  }

  public scrollToSection(sectionId: SectionId): void {
    this.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  public observeSectionInterception(): void {
    if (this.observers.length) {
      return;
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };
    this.observers = SECTIONS.map(
      ({ id }) =>
        new IntersectionObserver(
          ([entry]) => entry.isIntersecting && this.onActiveSectionChange(id),
          options
        )
    );

    this.observers.forEach((orserver, i) =>
      orserver.observe(this.getElementById(SECTIONS[i].id))
    );
  }

  private getElementById(sectionId: SectionId): HTMLElement {
    return document.getElementById(sectionId)!;
  }

  private onActiveSectionChange(sectionId: SectionId) {
    this._activeSectionId$.next(sectionId);
  }
}
