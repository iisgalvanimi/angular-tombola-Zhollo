import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartellaComponentiComponent } from './cartella-componenti/cartella-componenti.component';

@NgModule({
  declarations: [
    AppComponent,
    CartellaComponentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
