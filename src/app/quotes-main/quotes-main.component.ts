import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Boilerplates/Quote';
import * as moment from 'moment';

@Component({
  selector: 'app-quotes-main',
  templateUrl: './quotes-main.component.html',
  styleUrls: ['./quotes-main.component.scss'],
})
export class QuotesMainComponent implements OnInit {
  quotesObj: { quote: string; author: string }[] = [
    {
      quote:
        'Life isn’t about getting and having, it’s about giving and being.',
      author: 'Kevin Kruse',
    },
    {
      quote:
        'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill',
    },
    {
      quote: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },
    {
      quote:
        'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
      author: 'Robert Frost',
    },
    {
      quote: 'I attribute my success to this: I never gave or took any excuse.',
      author: 'Florence Nightingale',
    },
    {
      quote: 'You miss 100% of the shots you don’t take.',
      author: 'Wayne Gretzky',
    },
  ];
  quotes: Quotes[] = [];
  constructor() {
    this.quotesObj.map((element) =>
      this.quotes.push(
        new Quotes(
          'Lennox O.',
          element.quote,
          element.author,
          moment('2008-10-10')
        )
      )
    );
  }
  currentScore: number;
  newScore: number;
  counter: number;
  votesOnlyArr: number[] = [];
  addNewQuote(emittedQuote): void {
    this.quotes.push(emittedQuote);
  }

  upvote(i: number): void {
    this.quotes[i].upvotes -= -1;
  }
  downvote(i: number): void {
    this.quotes[i].downvotes -= -1;
  }
  delQuote(i: number): void {
    this.quotes.splice(i, 1);
  }
  highestUpvote(): number {
    Math.max.apply(null, this.votesOnlyArr);
    this.currentScore = 0;
    this.newScore = 0;
    this.quotes.map((quote) => {
      const { upvotes } = quote;
      return this.votesOnlyArr.push(upvotes);
    });
    return Math.max(...this.votesOnlyArr);
  }

  ngOnInit(): void {}
}
