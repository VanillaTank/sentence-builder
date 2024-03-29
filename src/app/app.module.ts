import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTUBtnComponent } from './htu-btn/htu-btn.component';
import { FiltersComponent } from './filters/filters.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HTUBtnComponent,
    FiltersComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
