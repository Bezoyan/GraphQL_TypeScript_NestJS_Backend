/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
//import { Library } from '../../libraries/models/library.model';

@InputType()
export class UpdateBookInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  createdDate: string;

  @Field()
  libraryId: string;
}