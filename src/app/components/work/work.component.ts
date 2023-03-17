import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WORK_CARDS } from 'src/app/constants/work-cards.constant';
import { ImageCardComponent } from '../image-card/image-card.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {
  public readonly workCards = WORK_CARDS;
}
