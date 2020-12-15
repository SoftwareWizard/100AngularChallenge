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
import { DirectivesDocumentationComponent } from './components/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './components/services-documentation/services-documentation.component';
import { SharedModule } from './modules/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressbarComponent,
    StarratingsComponent,
    TopOfPageComponent,
    ComponentsDocumentationComponent,
    DirectivesDocumentationComponent,
    ServicesDocumentationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
