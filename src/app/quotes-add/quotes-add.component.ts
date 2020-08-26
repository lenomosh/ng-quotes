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
  // newQuote = new Quotes ('', '', '', moment());
  @Output() emitQuote = new EventEmitter();
  quote: string;
  username: string;
  author: string;
  newQuote: any;

  submitQuote( ): void{
    this.newQuote = new Quotes(this.username,  this.quote, this.author, moment());
    this.quote = '';
    this.author = '';
    this.username = '';
    this.emitQuote.emit(this.newQuote);
  }

  ngOnInit(): void {
  }

}
