import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from './modules/shared/shared.module';

import { DirectivesModule } from './modules/directives/directives.module';
import { ComponentsModule } from './modules/components/components.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesModule } from './modules/services/services.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [AppComponent, HomeComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesModule,
    ComponentsModule,
    ServicesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
