import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services.routing.module';
import { ServicesDocumentationComponent } from './components/services-documentation/services-documentation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServicesDocumentationComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule]
})
export class ServicesModule {}
