import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-details-component',
  templateUrl: './quote-details-component.component.html',
  styleUrls: ['./quote-details-component.component.scss']
})
export class QuoteDetailsComponentComponent implements OnInit {

  @Input() quote!:Quote;

  @Output() del = new EventEmitter<boolean>();

  quoteDelete(clear:boolean) {
    this.del.emit(clear);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
