import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesDocumentationComponent } from './modules/services/components/services-documentation/services-documentation.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'components',
    loadChildren: () =>
      import('./modules/components/components.module').then(
        (m) => m.ComponentsModule
      ),
    data: { title: 'Components' },
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./modules/pipes/pipes.module').then((m) => m.PipesModule),
    data: { title: 'Pipes' },
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./modules/directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
    data: { title: 'Directives' },
  },
  {
    path: 'services',
    component: ServicesDocumentationComponent,
    data: { title: 'Services' },
  },
  {
    path: 'other',
    loadChildren: () =>
      import('./modules/other/other.module').then((m) => m.OtherModule),
    data: { title: 'Other' },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
