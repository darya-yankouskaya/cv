import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppearOnceDirective } from 'src/app/directives/appear-once.directive';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, AppearOnceDirective],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent {
  @Input() title = '';
  @Input() percent = 0;

  public scaleX = 0;

  public onBarAppear(): void {
    this.scaleX = this.percent / 100;
  }
}
