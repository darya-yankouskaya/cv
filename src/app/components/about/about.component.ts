import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from '../bar/bar.component';
import { SKILLS } from 'src/app/constants/skills.constant';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  public readonly skills = SKILLS;
}
