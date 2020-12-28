import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives.routing.module';
import { DirectivesDocumentationComponent } from './components/directives-documentation/directives-documentation.component';
import { SharedModule } from '../shared/shared.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { RippleDirective } from './ripple/ripple.directive';

@NgModule({
  declarations: [DirectivesDocumentationComponent, DebounceClickDirective, RippleDirective],
  imports: [CommonModule, DirectivesRoutingModule, SharedModule],
})
export class DirectivesModule {}
