import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';

@Directive({
  selector: '[appAppearOnce]',
  standalone: true
})
export class AppearOnceDirective implements AfterViewInit, OnDestroy {
  @Output() appear = new EventEmitter<void>();

  private observer: IntersectionObserver | undefined;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.appear.emit();
          this.observer?.disconnect();
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
