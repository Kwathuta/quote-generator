import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.scss']
})
export class QuoteComponentComponent implements OnInit {

  arrayQuotes:Quote[] = [
    new Quote('You only live ONCE', 'Kelvin Gitahi', 'Devin Belane'),
    new Quote('You only live ONCE', 'Kelvin Gitahi', 'Devin Belane')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
