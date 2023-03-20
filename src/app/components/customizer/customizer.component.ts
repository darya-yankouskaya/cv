import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from 'src/app/enums/theme.enum';
import { showHideAnimation } from 'src/app/constants/animations/show-hide.animation';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [showHideAnimation()]
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
