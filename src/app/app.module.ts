import { NovaAutoCompleteLibraryModule } from './../../projects/nova-auto-complete-library/src/lib/nova-auto-complete-library.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NovaAutoCompleteLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
