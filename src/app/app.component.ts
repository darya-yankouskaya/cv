import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ResumeComponent } from './components/resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IntroductionComponent, ResumeComponent]
})
export class AppComponent {}
