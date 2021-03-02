/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Book } from './models/book.model';
import { BOOKS } from '../mocks/books.mock';
import { AddBookInput } from './dto/add-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Library } from 'src/libraries/models/library.model';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks() {
    return this.books;
  }
  getBook(id: string) {
    return this.books.find(book => book.id === id);
  }

  getBookByTitile (title: string) {
    return this.books.find(book => book.title === title);
  }

  async addBook(input : AddBookInput): Promise<Book[]> {
    const lastBook = this.books.slice(-1).pop();
    const book: Book = {
      id: lastBook.id + 1,
      title: input.title,
      createdDate: this.getDate(),
      libraryId: input.libraryId,
      // library : Library["id"],
    };

    this.books.push(book);
    return this.books;
  }

  async updateBook(input : UpdateBookInput): Promise<[Book]> {
    const updated = this.books.find((item) => {
       if (item.id === input.id) {
          item.title = input.title,
          item.createdDate = input.createdDate,
          item.libraryId = input.libraryId
          return item
       }
    })
    return [updated]
  }

  deleteBook(id: string): Book[] {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
    throw new HttpException('Library not found', 404);
    }

    this.books.splice(bookIndex, 1);
    return this.books;
}

  getDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return String(dd + '/' + mm + '/' + yyyy);
}

}
