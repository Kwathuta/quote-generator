import { Quote } from '../quote';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-component',
  templateUrl: './quote-component.component.html',
  styleUrls: ['./quote-component.component.scss']
})
export class QuoteComponentComponent implements OnInit {

  arrayQuotes:Quote[] = [
    new Quote('You only live ONCE', 'Kelvin Gitahi', 'Devin Belane'),
    new Quote('You only live ONCE', 'Kelvin Gitahi', 'Devin Belane'),
    new Quote('You only live ONCE', 'Kelvin Gitahi', 'Devin Belane'),
    new Quote('You only live ONCE', 'Kelvin Gitahi', 'Devin Belane')
  ]

  deleteQuote(del:any,index:number) {
    if (del) {
      this.arrayQuotes.splice(index,1)
    }
  }

  addLike(newLike:any, index:number) {
    if (newLike) {
      this.arrayQuotes[index].likes += 1
    }
  }

  addDislike(newDislike:any, index:number) {
    if (newDislike) {
      this.arrayQuotes[index].dislikes += 1
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
