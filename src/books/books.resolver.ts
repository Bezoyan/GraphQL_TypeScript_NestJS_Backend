/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { AddBookInput } from './dto/add-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './models/book.model';

@Resolver('Books')
export class BooksResolver {
  constructor(
    private readonly bookService: BooksService,
  ) {}

  @Query((type) => [Book])
  async getBooks() {
    return this.bookService.getBooks();
  }

  @Query((type) => Book)
  async getBook(@Args('id') id: string) {
    return this.bookService.getBook(id);
  }
  @Query((type) => Book)
  async getBookByTitle(@Args('search') title: string) {

    return this.bookService.getBookByTitile(title);
  }

  @Mutation((type) => [Book])
  async addBook(@Args('input') input: AddBookInput) {
    return this.bookService.addBook(input);
  }

  @Mutation((type) => [Book])
  async updateBook(@Args('input') input: UpdateBookInput) {
    return this.bookService.updateBook(input);
  }

  @Mutation((type) => [Book])
  async deleteBook(@Args('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
