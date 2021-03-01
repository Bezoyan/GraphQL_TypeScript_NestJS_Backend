/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Library } from './models/library.model';
import { LIBRARIES } from '../mocks/libraries.mock';
import { AddLibraryInput } from './dto/add-library.input';
import { UpdateLibraryInput } from './dto/update-library.input';

@Injectable()
export class LibrariesService {
  libraries = LIBRARIES;

  getLibraries() {
    return this.libraries;
  }
  getLibrary(id: string) {
    return this.libraries.find(library => library.id === id);
  }

  async addLibrary(input: AddLibraryInput): Promise<Library[]> {
    const lastLibrary = this.libraries.slice(-1).pop();
    const library: Library = {
      id: lastLibrary.id + 1,
      title: input.title,
    };
    this.libraries.push(library);
    return this.libraries;
  }

  async updateLibrary(input: UpdateLibraryInput): Promise<Library[]> {
    const updateLibrary = this.libraries.find((item) => {
       if (item.id === input.id) {
        const library: Library = {
          id: item.id,
          title: input.title,
      }
      console.log(library);
       return library
       }
    });

    return;
  }

  deleteLibrary(id: string): Library[] {
    const libraryIndex = this.libraries.findIndex(item => item.id === id);
    if (libraryIndex === -1) {
      throw new HttpException('Library not found', 404);
    }

    this.libraries.splice(libraryIndex, 1);
    return this.libraries;
  }
}
