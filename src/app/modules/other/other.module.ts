import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other.routing.module';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';


@NgModule({
  declarations: [OtherDocumentationComponent],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
