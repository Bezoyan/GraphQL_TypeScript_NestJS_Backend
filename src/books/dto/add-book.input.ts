/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Library } from '../../libraries/models/library.model';

@InputType()
export class AddBookInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  createdDate: string;

  @Field()
  libraryId: string;
}