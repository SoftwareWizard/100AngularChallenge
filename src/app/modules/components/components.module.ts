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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { TabComponent } from './tab/tab.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { FooterComponent } from './footer/footer.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

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
    SimpleTableComponent,
    PagingComponent,
    TabComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    SnackbarComponent,
    SimplePopupComponent,
    CountdownTimerComponent,
    FooterComponent,
    SkeletonComponent,
    SocialMediaComponent,
    BottomSheetComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PipesModule,
  ],
  exports: [TopOfPageComponent, TabComponent],
})
export class ComponentsModule {}
