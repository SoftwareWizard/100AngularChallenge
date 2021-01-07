import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DirectivesModule } from './modules/directives/directives.module';
import { ComponentsModule } from './modules/components/components.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesModule } from './modules/services/services.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { OtherModule } from './modules/other/other.module';
@NgModule({
  declarations: [AppComponent, HomeComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DirectivesModule,
    ComponentsModule,
    ServicesModule,
    SharedModule,
    OtherModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
