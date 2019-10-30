import { NovaSearchModule } from '../../projects/nova-auto-complete-library/src/lib/nova-search.module';
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
    NovaSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
