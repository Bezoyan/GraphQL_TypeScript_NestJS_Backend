/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateLibraryInput {
  @Field()
  @IsNotEmpty()
  id: string;
  
  @Field()
  @IsNotEmpty()
  title: string;
}