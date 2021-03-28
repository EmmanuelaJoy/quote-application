import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  numberOfUpvotes: number = 0;
  numberOfDownvotes: number = 0;

  upvote() {
    this.numberOfUpvotes += 1;
    if (this.numberOfDownvotes > 0) {
      this.numberOfDownvotes = 0;
    }
  }

  downvote() {
    this.numberOfDownvotes += 1;
    if (this.numberOfUpvotes > 0) {
      this.numberOfUpvotes = 0;
    }
  }

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
