import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeDocumentationComponent } from './components/pipe-documentation/pipe-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: PipeDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
