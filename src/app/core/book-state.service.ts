import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Book } from "../shared/models/book";

@Injectable({
  providedIn: "root"
})
export class BookStateService {
  private store: BehaviorSubject<Book[]>;

  constructor() {
    this.store = new BehaviorSubject([]);
  }

  setState(books: Book[]) {
    this.store.next(books);
  }

  addState(book: Book) {
    let books = this.store.getValue();
    this.store.next([...books, book]);
  }

  deleteState(book: Book) {
    let books = this.store.getValue().filter(val => {
      return val.getId !== book.getId;
    });
    this.store.next(books);
  }

  updateState(book: Book) {
    let books = this.store.getValue().map(val => {
      if (val.getId === book.getId) {
        val = book;
      }
      return val;
    });
    this.store.next(books);
  }

  get getState() {
    return this.store.asObservable();
  }
}
