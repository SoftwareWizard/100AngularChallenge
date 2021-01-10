import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormDirty } from '../guards/form-dirty/form-dirty.interface';
import {
  slideRightAnimation,
  slideLeftAnimation,
} from '../animations/slide.animation';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [slideRightAnimation, slideLeftAnimation],
})
export class OtherDocumentationComponent implements IFormDirty {
  public tabs: { title: string; active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  public selectedTab = 0;

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
