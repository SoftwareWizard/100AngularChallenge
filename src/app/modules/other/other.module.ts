import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other.routing.module';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    OtherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class OtherModule {}
