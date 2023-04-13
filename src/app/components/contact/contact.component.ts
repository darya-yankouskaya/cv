import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    FormFieldErrorComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  public form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required]
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });
  public nameControl = this.form.controls.name;
  public emailControl = this.form.controls.email;
  public messageControl = this.form.controls.message;
}
