import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Everything will be okay in the end if it is not okay, it is not the end.', 'John Lennon', 'Emmanuela', new Date(2021, 2, 12)),
    new Quote('I am no longer accepting the things i cannot change, i am changing the things i cannot accept.', 'Angela Davis', 'Emmanuela', new Date(2021, 1, 5)),
    new Quote('Do not live the same year 75 times and call it a life.', 'R Sharma', 'Emmanuela', new Date(2020, 11, 8)),
    new Quote('Suffer the pain of discipline or suffer the pain of regret.', 'John Lennon', 'Emmanuela', new Date(2020, 5, 10)),
    new Quote('Everything will be okay in the end if it is not okay, it is not the end.', 'John Lennon', 'Emmanuela', new Date(2019, 10, 20)),
    new Quote('Everything will be okay in the end if it is not okay, it is not the end.', 'John Lennon', 'Emmanuela', new Date(2019, 2, 7)),
    new Quote('Everything will be okay in the end if it is not okay, it is not the end.', 'John Lennon', 'Emmanuela', new Date(2018, 9, 15)),
    new Quote('There is a danger in letting people misname you. If you are a fire, do not answer when they call you a spark.', 'Upile Chisala', 'Emmanuela', new Date(2018, 4, 14))
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote) {
    this.quotes.unshift(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
