import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { WorkComponent } from '../work/work.component';
import { SECTIONS } from 'src/app/constants/sections.constants';
import { SectionId } from 'src/app/enums/section.enum';
import { ExperienceComponent } from '../experience/experience.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    WorkComponent,
    ExperienceComponent,
    ClientsComponent,
    ContactComponent
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent {
  public readonly sections = SECTIONS;
  public readonly SectionId = SectionId;
}
