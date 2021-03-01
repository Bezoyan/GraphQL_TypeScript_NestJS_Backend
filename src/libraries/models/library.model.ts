/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Library {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;
}
