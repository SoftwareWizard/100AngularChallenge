import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsDocumentationComponent } from './components/components-documentation/components-documentation.component';


const routes: Routes = [
  { path: '', component: ComponentsDocumentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
