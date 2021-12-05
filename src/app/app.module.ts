import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioModule } from './modules/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
