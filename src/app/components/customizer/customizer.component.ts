import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Theme } from 'src/app/enums/theme.enum';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('true', style({ transform: 'none' })),
      state('false', style({ transform: 'translateY(-150%)' })),
      transition('false <=> true', [animate(300)])
    ])
  ]
})
export class CustomizerComponent {
  public readonly Theme = Theme;
  public isOpen = false;
  public selectedTheme = Theme.Default;

  public onSwitcherClick(): void {
    this.isOpen = !this.isOpen;
  }

  public onThemeChange() {
    document.body.classList.toggle('dark-theme');

    this.selectedTheme =
      this.selectedTheme === Theme.Dark ? Theme.Default : Theme.Dark;
  }
}
