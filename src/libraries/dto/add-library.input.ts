/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class AddLibraryInput {
  @Field()
  @IsNotEmpty()
  title: string;
}