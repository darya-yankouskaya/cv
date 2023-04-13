import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-field-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldErrorComponent {

}
