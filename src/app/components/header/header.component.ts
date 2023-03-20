import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { untilDestroyed } from 'src/app/helpers/destroy.helper';
import { fromEvent } from 'rxjs';
import { showHideAnimation } from '../../constants/animations/show-hide.animation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [showHideAnimation(500)]
})
export class HeaderComponent implements OnInit {
  public showHeader = false;

  private readonly untilDestroyed = untilDestroyed();

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(this.untilDestroyed())
        .subscribe(() => {
          const isHeaderVisible = window.scrollY > window.innerHeight;

          if (isHeaderVisible !== this.showHeader) {
            this.showHeader = isHeaderVisible;
            this.cdr.detectChanges();
          }
        });
    });
  }
}
