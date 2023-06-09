import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ResumeComponent } from './components/resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IntroductionComponent,
    ResumeComponent,
    CustomizerComponent,
    HeaderComponent
  ]
})
export class AppComponent {}
