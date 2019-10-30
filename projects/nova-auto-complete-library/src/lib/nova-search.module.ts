import { NgModule } from '@angular/core';
import { NovaSearchDirective } from './nova-search.directive';
import { FilterPipe } from './filter.pipe';
import { LetterBoldPipe } from './letter-bold.pipe';
import { NovaSearchComponent } from './nova-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NovaSearchDirective,
    FilterPipe,
    LetterBoldPipe,
    NovaSearchComponent
  ],
  exports: [
    FilterPipe,
    LetterBoldPipe,
    NovaSearchDirective,
    NovaSearchComponent
  ]
})
export class NovaSearchModule { }
