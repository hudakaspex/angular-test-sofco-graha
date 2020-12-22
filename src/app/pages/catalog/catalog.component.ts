import { Component, OnInit } from "@angular/core";
import { BookStateService } from "../../core/book-state.service";
import { Book } from "../../shared/models/book";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"]
})
export class CatalogComponent implements OnInit {
  books: Book[];
  constructor(private bookStateService: BookStateService) {}

  ngOnInit() {
    this.books = this.getDummyBook();
    this.getBookState();
  }

  onEvent(book: Book) {
    this.bookStateService.addState(book);
  }

  getBookState() {
    this.bookStateService.getState.subscribe(books => {
      this.setStockBook(books);
    });
  }

  setStockBook(books: Book[] = []) {
    let index;
    this.books = this.books.map(book => {
      index = books.findIndex(val => val.getId === book.getId);
      if (index !== -1) {
        book.setStok = 0;
      }
      return book;
    });
    console.log(this.books);
  }

  getDummyBook(): Book[] {
    let book1 = new Book();
    book1.setId = 1;
    book1.setAuthor = "by J.R.R. Tolkien";
    book1.setPrice = 1200000;
    book1.setTitle = "The Lord of the Rings";
    book1.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg";
    book1.setStok = 1;

    let book2 = new Book();
    book2.setId = 2;
    book2.setAuthor = "by Markus Zusak";
    book2.setPrice = 540000;
    book2.setTitle = "The Book Thief";
    book2.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg";
    book1.setStok = 1;

    let book3 = new Book();
    book3.setId = 3;
    book3.setAuthor = "by Harper Lee";
    book3.setPrice = 450000;
    book3.setTitle = "To Kill a Mockingbird";
    book3.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg";
    book3.setStok = 1;

    let book4 = new Book();
    book4.setId = 4;
    book4.setAuthor = "by Jane Austen";
    book4.setPrice = 840000;
    book4.setTitle = "Pride and Prejudice";
    book4.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg";
    book4.setStok = 1;

    let book5 = new Book();
    book5.setId = 5;
    book5.setAuthor = "by Anne Frank";
    book5.setPrice = 310000;
    book5.setTitle = "	The Diary of a Young Girl";
    book5.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg";
    book5.setStok = 1;

    let book6 = new Book();
    book6.setId = 6;
    book6.setAuthor = "by George Orwell";
    book6.setPrice = 220000;
    book6.setTitle = "1984";
    book6.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg";
    book6.setStok = 1;

    let book7 = new Book();
    book7.setId = 7;
    book7.setAuthor = "by George Orwell";
    book7.setPrice = 150000;
    book7.setTitle = "Animal Farm";
    book7.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448.jpg";
    book7.setStok = 1;

    let book8 = new Book();
    book8.setId = 8;
    book8.setAuthor = "by Antoine de Saint-Exupéry";
    book8.setPrice = 50000;
    book8.setTitle = "The Little Prince";
    book8.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367545443l/157993.jpg";
    book8.setStok = 1;

    let book9 = new Book();
    book9.setId = 9;
    book9.setAuthor = "by F. Scott Fitzgerald";
    book9.setPrice = 130000;
    book9.setTitle = "The Great Gatsby";
    book9.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg";
    book9.setStok = 1;

    let book10 = new Book();
    book10.setId = 9;
    book10.setAuthor = "by J.D. Salinger";
    book10.setPrice = 130000;
    book10.setTitle = "The Catcher in the Rye";
    book10.setImgUrl =
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg";
    book10.setStok = 1;

    return [
      book1,
      book2,
      book3,
      book4,
      book5,
      book6,
      book7,
      book8,
      book9,
      book10
    ];
  }
}
