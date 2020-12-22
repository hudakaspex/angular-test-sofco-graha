import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BookStateService } from "../../../core/book-state.service";
import { Book } from "../../models/book";

interface Menu {
  icon: string;
  label: string;
  status: string;
  url: string;
  id: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menus: Menu[] = [
    {
      icon: "",
      label: "Home",
      status: "active",
      url: "/page/home",
      id: "home"
    },
    {
      icon: "",
      label: "Catalog",
      status: "",
      url: "/page/catalog",
      id: "catalog"
    },
    {
      icon: "",
      label: "Shoping List",
      status: "",
      url: "/page/shoping-list",
      id: "list"
    }
  ];

  books: Book[];

  constructor(
    private router: Router,
    private bookStateService: BookStateService
  ) {}

  ngOnInit() {
    this.getBookState();
  }

  getBookState() {
    this.bookStateService.getState.subscribe(books => {
      this.books = books;
    });
  }

  onRoute(menu: Menu) {
    this.router.navigate([menu.url]);
    this.setActivatedMenu(menu);
    console.log(menu);
  }

  setActivatedMenu(menu: Menu) {
    this.menus = this.menus.map(val => {
      if (menu.id === val.id) {
        val.status = "active";
      } else {
        val.status = "";
      }
      return val;
    });
  }
}
