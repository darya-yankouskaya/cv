import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormFieldErrorComponent],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @Input() label!: string;

  @ContentChildren(FormFieldErrorComponent)
  errorList!: QueryList<FormFieldErrorComponent>;
}
