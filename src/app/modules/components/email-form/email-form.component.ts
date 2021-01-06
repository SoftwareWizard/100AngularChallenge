import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initialzeForm();
  }

  private initialzeForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required, Validators.email],
      message: [''],
    });
  }

  public submitMessage(): void {
    console.log('Check out Algorithm');
  }
}
