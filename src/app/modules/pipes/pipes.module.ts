import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes.routing.module';
import { PipeDocumentationComponent } from './components/pipe-documentation/pipe-documentation.component';


@NgModule({
  declarations: [PipeDocumentationComponent],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
