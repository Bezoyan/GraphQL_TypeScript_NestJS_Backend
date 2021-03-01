/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Book } from './models/book.model';
import { BOOKS } from '../mocks/books.mock';
import { AddBookInput } from './dto/add-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks() {
    return this.books;
  }
  getBook(id: string) {
    return this.books.find(book => book.id === id);
  }

  async addBook(input : AddBookInput): Promise<Book[]> {
    const lastBook = this.books.slice(-1).pop();
    const book: Book = {
      id: lastBook.id + 1,
      title: input.title,
      createdDate: input.createdDate,
      libraryId: input.libraryId,
    };

    this.books.push(book);
    return this.books;
  }

  async updateBook(input : UpdateBookInput): Promise<[Book]> {
    const lastBook = this.books.slice(-1).pop();
    const book : Book = {
      id: lastBook.id + 1,
      title: input.title,
      createdDate: input.createdDate,
      libraryId: input.libraryId,
    };

    this.books.push(book);
    return;
  }

  deleteBook(id: string): Book[] {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
    throw new HttpException('Library not found', 404);
    }

    this.books.splice(bookIndex, 1);
    return this.books;
}
}
