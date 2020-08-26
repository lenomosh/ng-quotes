import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesMainComponent } from './quotes-main/quotes-main.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesAddComponent } from './quotes-add/quotes-add.component';
import { DateDifferencePipe } from './Pipes/DateDifference/date-difference.pipe';
import { HighlighterDirective } from './Directives/Highlighter/highlighter.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuotesMainComponent,
    QuotesDetailsComponent,
    QuotesAddComponent,
    DateDifferencePipe,
    HighlighterDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
