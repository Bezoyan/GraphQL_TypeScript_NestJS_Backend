/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from "../../books/models/book.model";

@ObjectType()
export class Library {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  // @Field (type => [Book])
  // books : Book[];
}
