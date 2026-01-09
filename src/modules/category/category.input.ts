import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateCategoryInput {
    @Field(() => String)
    name: string;
}