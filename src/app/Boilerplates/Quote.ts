import * as moment from 'moment';
export class Quotes {
  public upvotes: number;
  public downvotes: number;

  constructor(
    public username: string,
    public quote: string,
    public author: string,
    public datecreated: moment.Moment
  ) {
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
