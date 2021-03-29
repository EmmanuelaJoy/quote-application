import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quote;

  upvote() {
    this.quote.upvotes += 1;
    if (this.quote.upvotes > 0) {
      this.quote.downvotes = 0;
    }
  }

  downvote() {
    this.quote.downvotes += 1;
    if (this.quote.downvotes > 0) {
      this.quote.upvotes = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
