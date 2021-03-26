import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes!: Quote[] = [
    new Quote('Everything will be okay in the end if it is not okay, it is not the end.', 'John Lennon', 'Emmanuela')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
