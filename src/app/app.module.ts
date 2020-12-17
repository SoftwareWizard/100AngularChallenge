import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StarratingsComponent } from './components/starratings/starratings.component';
import { FormsModule } from '@angular/forms';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentsDocumentationComponent } from './components/components-documentation/components-documentation.component';
import { ServicesDocumentationComponent } from './components/services-documentation/services-documentation.component';
import { SharedModule } from './modules/shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { Loader2Component } from './components/loader2/loader2.component';
import { ModalComponent } from './components/modal/modal.component';
import { DirectivesModule } from './modules/directives/directives.module';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressbarComponent,
    StarratingsComponent,
    TopOfPageComponent,
    ComponentsDocumentationComponent,
    ServicesDocumentationComponent,
    LoaderComponent,
    CreditCardComponent,
    Loader2Component,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule, DirectivesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
