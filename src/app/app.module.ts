import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompSearchComponent } from './components/comp-search/comp-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,    
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
