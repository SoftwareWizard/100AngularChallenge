import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesDocumentationComponent } from './components/services-documentation/services-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
