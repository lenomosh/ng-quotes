import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Quotes} from '../Boilerplates/Quote';
import * as moment from 'moment';

@Component({
  selector: 'app-quotes-add',
  templateUrl: './quotes-add.component.html',
  styleUrls: ['./quotes-add.component.scss']
})
export class QuotesAddComponent implements OnInit {

  constructor() { }
  newQuote = new Quotes ('', '', '', moment());
  @Output() emitQuote = new EventEmitter();
  quoteStr: string;
  quotePublisher: string;
  quoteAuthor: string;
  theQuote: any;

  submitQuote( ): void{
    this.theQuote = new Quotes(this.quotePublisher, this.quoteAuthor, this.quoteStr, this.theQuote);
    this.quoteStr = '';
    this.quoteAuthor = '';
    this.quotePublisher = '';
    this.emitQuote.emit(this.theQuote);
  }

  ngOnInit(): void {
  }

}
