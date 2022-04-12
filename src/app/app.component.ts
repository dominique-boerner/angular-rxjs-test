import {Component, OnInit} from '@angular/core';
import BooksActions from "./core/actions/books.actions";
import {Book} from "./core/models/Book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  books: Book[] = [];

  constructor(private readonly bookActions: BooksActions) {
  }

  ngOnInit() {
    this.bookActions.getBooks().subscribe((books) => this.books = books);
  }
}
