import { Test, TestingModule } from '@nestjs/testing';
import { LibrariesResolver } from './libraries.resolver';

describe('LibrariesResolver', () => {
  let resolver: LibrariesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibrariesResolver],
    }).compile();

    resolver = module.get<LibrariesResolver>(LibrariesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
