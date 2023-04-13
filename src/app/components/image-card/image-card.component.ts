import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCard } from 'src/app/models/image-card.model';
import { TransformImageDirective } from 'src/app/directives/transform-image.directive';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule, TransformImageDirective],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCardComponent {
  @Input() card!: ImageCard;
}
