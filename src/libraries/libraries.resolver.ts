/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LibrariesService } from './libraries.service';
import { AddLibraryInput } from './dto/add-library.input';
import { UpdateLibraryInput } from './dto/update-library.input';
import { Library } from './models/library.model';

@Resolver('Libraries')
export class LibrariesResolver {
    constructor(
      private readonly libraryService:  LibrariesService
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
  
    @Mutation(type => [Library])
    async addLibrary(
      @Args('input') input: AddLibraryInput,
    ) {
      return this.libraryService.addLibrary(input);
    }
  
    @Mutation(type => Library)
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
