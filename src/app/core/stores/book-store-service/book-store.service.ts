import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  books = new BehaviorSubject<Book[]>([]);
}
