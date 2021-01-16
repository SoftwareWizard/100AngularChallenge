import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes.routing.module';
import { PipeDocumentationComponent } from './components/pipe-documentation/pipe-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { FilterTermPipe } from './filter-term/filter-term.pipe';
import { SortByPipe } from './sort-by/sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key/sort-by-key.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    FilterTermPipe,
    SortByPipe,
    SortByKeyPipe,
  ],
  imports: [CommonModule, PipesRoutingModule, SharedModule],
  exports: [FilterTermPipe],
})
export class PipesModule {}
