import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes.routing.module';
import { PipeDocumentationComponent } from './components/pipe-documentation/pipe-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';


@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ]
})
export class PipesModule { }
