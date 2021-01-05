import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [CardComponent],
})
export class SharedModule {}
