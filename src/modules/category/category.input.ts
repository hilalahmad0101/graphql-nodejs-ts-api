import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateCategoryInput {
    @Field(() => String)
    name: string;
}

@InputType()
export class UpdateCategoryInput {
    @Field(() => Int)
    id: number;
    @Field(() => String)
    name: string;
}