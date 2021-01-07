import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { OtherDocumentationComponent } from '../../other-documentation/other-documentation.component';
import { IFormDirty } from './form-dirty.interface';

@Injectable({
  providedIn: 'root',
})
export class FormDirtyGuard implements CanDeactivate<IFormDirty> {
  canDeactivate(component: OtherDocumentationComponent): boolean {
    if (component.form.dirty) {
      return confirm('Your Form is Dirty. Are you sure to leave?');
    }

    return true;
  }
}
