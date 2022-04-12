import { Component } from '@angular/core';
import BooksActions from '../../core/actions/books.actions';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
})
export class SearchBooksComponent {
  constructor(private readonly bookActions: BooksActions) {}

  searchBook(value: string) {
    this.bookActions.searchBooks(value);
  }
}
