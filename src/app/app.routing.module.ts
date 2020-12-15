import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsDocumentationComponent } from './components/components-documentation/components-documentation.component';
import { DirectivesDocumentationComponent } from './components/directives-documentation/directives-documentation.component';
import { ServicesDocumentationComponent } from './components/services-documentation/services-documentation.component';

const routes: Routes = [
  { path: 'components', component: ComponentsDocumentationComponent },
  { path: 'pipes', loadChildren: () => import('./modules/pipes/pipes.module').then(m => m.PipesModule) },
  { path: 'directives', component: DirectivesDocumentationComponent },
  { path: 'services', component: ServicesDocumentationComponent },
  { path: 'other', component: ComponentsDocumentationComponent },
  { path: '**', component: ComponentsDocumentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
