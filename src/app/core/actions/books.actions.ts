import { Book } from '../models/Book';
import { BookStoreService } from '../stores/book-store-service/book-store.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class BooksActions {
  constructor(
    private readonly bookStore: BookStoreService,
    private readonly http: HttpClient
  ) {}

  getBooks() {
    return this.bookStore.books;
  }

  setBooks(books: Book[]) {
    this.bookStore.books.next(books);
  }

  addBook(book: Book) {
    this.bookStore.books.next([...this.bookStore.books.getValue(), book]);
  }

  searchBooks(title: string) {
    this.http
      .get(`http://openlibrary.org/search.json?title=${title}`)
      .subscribe(
        pipe((source: any) => {
          const books = source.docs.map((olbook: any) => {
            console.log('book', olbook);
            return {
              title: olbook.title,
              author: olbook.author_name ? olbook.author_name[0] : 'unknown',
              imageUrl: `https://covers.openlibrary.org/b/id/${olbook.cover_i}-M.jpg`,
            };
          });

          console.log(books);

          this.setBooks(books);
        })
      );
  }
}
