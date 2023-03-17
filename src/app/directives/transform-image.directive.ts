import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  NgZone
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { untilDestroyed } from '../helpers/destroy.helper';

@Directive({
  selector: '[appTransformImage]',
  standalone: true
})
export class TransformImageDirective implements AfterViewInit {
  private readonly maxXAngle = 17;
  private readonly maxYAngle = 13;
  private readonly destroy = untilDestroyed();

  constructor(
    private element: ElementRef<HTMLImageElement>,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.subscribeOnMouseEvents();
  }

  private getTransformValue(xAngle: number, yAngle: number): string {
    return `rotateX(${xAngle}deg) rotateY(${yAngle}deg) scale3d(1.07, 1.07, 1.07)`;
  }

  private getXAngle(offsetY: number): number {
    const elemHeight = this.element.nativeElement.clientHeight;
    const mediumHeight = elemHeight / 2;

    return ((offsetY - mediumHeight) / mediumHeight) * this.maxXAngle;
  }

  private getYAngle(offsetX: number) {
    const elemWidth = this.element.nativeElement.clientWidth;
    const mediumWidth = elemWidth / 2;

    return ((offsetX - mediumWidth) / mediumWidth) * this.maxYAngle;
  }

  private subscribeOnMouseEvents() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.element.nativeElement, 'mouseover')
        .pipe(this.destroy())
        .subscribe(() => {
          this.element.nativeElement.classList.add('image--hovered');
          this.cdr.detectChanges();
        });

      fromEvent(this.element.nativeElement, 'mouseleave')
        .pipe(this.destroy())
        .subscribe(() => {
          this.element.nativeElement.classList.remove('image--hovered');
          this.element.nativeElement.style.transform = '';
          this.cdr.detectChanges();
        });

      fromEvent<MouseEvent>(this.element.nativeElement, 'mousemove')
        .pipe(this.destroy())
        .subscribe(e => {
          const xAngle = this.getXAngle(e.offsetY);
          const yAngle = this.getYAngle(e.offsetX);
          const transform = this.getTransformValue(xAngle, yAngle);

          this.element.nativeElement.style.transform = transform;
          this.cdr.detectChanges();
        });
    });
  }
}
