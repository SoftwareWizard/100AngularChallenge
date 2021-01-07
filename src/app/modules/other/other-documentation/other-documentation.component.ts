import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
})
export class OtherDocumentationComponent implements IFormDirty {
  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }
  form: FormGroup;

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  public submitMessage(): void {
    console.log('Check out Algorithm');
  }
}
