import { Module } from '@nestjs/common';
import { LibrariesResolver } from './libraries.resolver';
import { LibrariesService } from './libraries.service';
import { BooksService } from '../books/books.service';

@Module({
  providers: [LibrariesResolver, LibrariesService, BooksService],
})
export class LibrariesModule {}
