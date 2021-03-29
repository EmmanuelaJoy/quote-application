import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Be sure you put your feet in the right place, then stand firm.', 'Abraham Lincoln', 'Emmanuela', new Date(2021, 3, 15)),
    new Quote('And if it does nothing else for you, it should make you happy.', 'Bob Ross', 'Emmanuela', new Date(2021, 4, 5)),
    new Quote('There are no limits to what you can accomplish, except the limits you place on your own thinking.', 'Brian Tracy', 'Emmanuela', new Date(2021, 6, 12)),
    new Quote('What a wonderful thought it is that some of the best days in our lives have not even happened yet.', 'Anne Frank', 'Emmanuela', new Date(2020, 11, 8)),
    new Quote('We must all suffer one of two things: the pain of discipline or the pain of regret.', 'Jim Rohn', 'Emmanuela', new Date(2020, 10, 10)),
    new Quote('Everything will be okay in the end if it is not okay, it is not the end.', 'John Lennon', 'Emmanuela', new Date(2020, 8, 20)),
    new Quote('You don’t get results by focusing on results. You get results by focusing on the actions that produce results.', 'Mike Hawkins', 'Emmanuela', new Date(2019, 11, 20)),
    new Quote('There is a danger in letting people misname you. If you are a fire, do not answer when they call you a spark.', 'Upile Chisala', 'Emmanuela', new Date(2019, 7, 14))
  ];

  addNewQuote(quote) {
    if (quote.quoteInput == " " || quote.author == " " || quote.publisher == " ") {
      alert("Please fill in all the quote details first")
    } else {
      this.quotes.unshift(quote)
    }
  }


  deleteQuote(index) {
    let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)

    if (toDelete) {
      this.quotes.splice(index, 1)
    }

  }

  highestVote?: number
  lowestVote?: number
  counter?: number

  highestUpvote() {
    this.highestVote = 0
    this.lowestVote = 0

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lowestVote = this.quotes[this.counter].upvotes;
      if (this.lowestVote > this.highestVote) { this.highestVote = this.lowestVote }
    }
    return this.highestVote
  }


  constructor() { }

  ngOnInit(): void {
  }

}
