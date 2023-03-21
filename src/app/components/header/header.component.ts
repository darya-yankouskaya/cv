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
import { SECTIONS } from 'src/app/constants/sections.constants';
import { SectionId } from 'src/app/enums/section.enum';

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
  public readonly sections = SECTIONS;
  public isHeaderVisible = false;

  private readonly untilDestroyed = untilDestroyed();

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  public scrollToSection(id: SectionId) {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  }

  private checkScrollPosition(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(this.untilDestroyed())
        .subscribe(() => {
          const isHeaderVisible = window.scrollY > window.innerHeight - 20;

          if (isHeaderVisible !== this.isHeaderVisible) {
            this.isHeaderVisible = isHeaderVisible;
            this.cdr.detectChanges();
          }
        });
    });
  }
}
