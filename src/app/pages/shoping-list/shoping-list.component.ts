import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BookStateService } from "../../core/book-state.service";
import { Book } from "../../shared/models/book";

@Component({
  selector: "app-shoping-list",
  templateUrl: "./shoping-list.component.html",
  styleUrls: ["./shoping-list.component.css"]
})
export class ShopingListComponent implements OnInit, OnDestroy {
  books: Book[];
  destroy$: Subject<boolean>;
  totalCart: number;

  constructor(private bookStateService: BookStateService) {
    this.books = [];
    this.destroy$ = new Subject();
    this.totalCart = 0;
  }

  ngOnInit() {
    this.initBooks();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  initBooks() {
    this.bookStateService.getState
      .pipe(takeUntil(this.destroy$))
      .subscribe(books => {
        this.books = books;
        this.setTotal(books);
      });
  }

  setTotal(books: Book[]) {
    this.totalCart = 0;
    books.forEach(book => {
      this.totalCart += book.getPrice;
    });
  }

  onDelete(book: Book) {
    this.bookStateService.deleteState(book);
  }

  updateState(book: Book) {
    book.setStok = 1;
    this.bookStateService.updateState(book);
  }
}
