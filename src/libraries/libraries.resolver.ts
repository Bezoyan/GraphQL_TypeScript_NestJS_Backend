/* eslint-disable prettier/prettier */
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LibrariesService } from './libraries.service';
import { BooksService } from '../books/books.service'
import { AddLibraryInput } from './dto/add-library.input';
import { UpdateLibraryInput } from './dto/update-library.input';
import { Library } from './models/library.model';
import {Book} from '../books/models/book.model';

@Resolver(() => Library)
export class LibrariesResolver {
    constructor(
      private readonly libraryService:  LibrariesService,
      private readonly bookService:  BooksService
    ) {}
  
    @Query(type => [Library])
    async getLibraries() {
      return this.libraryService.getLibraries();
    }
  
    @Query(type => Library)
    async getLibrary(
      @Args('id') id: string,
    ) {
      return this.libraryService.getLibrary(id);
    }

    @Query(type => [Library])
  async library(@Args('id') id: string) {
    return this.libraryService.getLibrary(id);
  }

   @Query(type => [Book])
    async books(@Parent() library: Library) {
    const id  = library.id;
    return this.bookService.getBook(id);
  }
    @Mutation(type => [Library])
    async addLibrary(
      @Args('input') input: AddLibraryInput,
    ) {
      return this.libraryService.addLibrary(input);
    }
  
    @Mutation(type => [Library])
    async updateLibrary(
      @Args('input') input: UpdateLibraryInput,
    ) {
      return this.libraryService.updateLibrary(input);
    }
  
    @Mutation(type => [Library])
    async deleteLibrary(
      @Args('id') id: string,
    ) {
      return this.libraryService.deleteLibrary(id);
    }
  }
