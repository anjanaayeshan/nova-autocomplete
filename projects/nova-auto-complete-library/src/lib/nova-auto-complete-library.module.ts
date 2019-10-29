import { NgModule } from '@angular/core';
import { NovaAutoCompleteDirective } from './nova-auto-complete.directive';
import { FilterPipe } from './filter.pipe';
import { LetterBoldPipe } from './letter-bold.pipe';
import { NovaAutoCompleteComponent } from './nova-auto-complete.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NovaAutoCompleteDirective,
    FilterPipe,
    LetterBoldPipe,
    NovaAutoCompleteComponent
  ],
  exports: [
    FilterPipe,
    LetterBoldPipe,
    NovaAutoCompleteDirective,
    NovaAutoCompleteComponent
  ]
})
export class NovaAutoCompleteLibraryModule { }
