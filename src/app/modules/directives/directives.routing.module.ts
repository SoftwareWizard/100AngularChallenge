import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesDocumentationComponent } from './components/directives-documentation/directives-documentation.component';

const routes: Routes = [
  { path: '', component: DirectivesDocumentationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectivesRoutingModule {}
