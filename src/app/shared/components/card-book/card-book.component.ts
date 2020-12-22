import { DatePipe } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Book } from "../../models/book";

@Component({
  selector: "app-card-book",
  templateUrl: "./card-book.component.html",
  styleUrls: ["./card-book.component.css"]
})
export class CardBookComponent implements OnInit {
  @Input() book: Book;
  @Output() event: EventEmitter<Book>;

  constructor() {
    this.event = new EventEmitter();
  }

  ngOnInit() {}

  onEvent(book: Book) {
    this.event.emit(book);
  }
}
