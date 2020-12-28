import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components.routing.module';
import { ComponentsDocumentationComponent } from './components-documentation/components-documentation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { LoaderComponent } from './loader/loader.component';
import { Loader2Component } from './loader2/loader2.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { StarratingsComponent } from './starratings/starratings.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CounterInputComponent } from './counter-input/counter-input.component';

@NgModule({
  declarations: [
    ComponentsDocumentationComponent,
    AccordionComponent,
    CreditCardComponent,
    LoaderComponent,
    Loader2Component,
    ModalComponent,
    ProgressbarComponent,
    StarratingsComponent,
    TopOfPageComponent,
    QuoteComponent,
    ToggleComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    SharedModule,
    PipesModule,
  ],
  exports: [TopOfPageComponent],
})
export class ComponentsModule {}
