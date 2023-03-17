import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, AboutComponent, WorkComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent {}
