import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesDocumentationComponent } from './modules/services/components/services-documentation/services-documentation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'components',
    loadChildren: () =>
      import('./modules/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./modules/pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./modules/directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
  },
  { path: 'services', component: ServicesDocumentationComponent },
  {
    path: 'other',
    loadChildren: () =>
      import('./modules/other/other.module').then(
        (m) => m.OtherModule
      ),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
