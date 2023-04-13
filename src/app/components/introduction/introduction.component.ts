import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { untilDestroyed } from 'src/app/helpers/destroy.helper';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class IntroductionComponent implements OnInit {
  public readonly maxTranslatePx = 400;
  public readonly name = 'Persona';
  public ratio = 1;
  public transform = 'translate3d(0px, 0px, 0px)';
  private readonly untilDestroyed = untilDestroyed();

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(this.untilDestroyed())
        .subscribe(() => this.updateContentStyles());
    });
  }

  private updateContentStyles(): void {
    const scrollOffset = window.pageYOffset;
    let newRatio = 0;

    if (scrollOffset < window.innerHeight) {
      newRatio =
        1 - scrollOffset
          ? 1 - +(scrollOffset / window.innerHeight).toFixed(6)
          : 0;

      this.transform = `translate3d(0px, ${
        scrollOffset ? +(this.maxTranslatePx * (1 - newRatio)).toFixed(6) : '0'
      }px, 0px)`;
    } else {
      this.transform = `translate3d(0px, 300%, 0px)`;
    }

    if (this.ratio !== newRatio) {
      this.ratio = newRatio;
      this.cdr.detectChanges();
    }
  }
}
