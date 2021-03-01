import { Module } from '@nestjs/common';
import { LibrariesResolver } from './libraries.resolver';
import { LibrariesService } from './libraries.service';

@Module({
  providers: [LibrariesResolver, LibrariesService],
})
export class LibrariesModule {}
