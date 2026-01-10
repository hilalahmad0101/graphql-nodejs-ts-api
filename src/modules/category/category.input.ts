import { IsNotEmpty, Length } from 'class-validator';
import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CreateCategoryInput {
    @Field(() => String)
    @Length(3, 20, {
        message: 'Name must be between 2 and 20 characters'
    })
    @IsNotEmpty({
        message: 'Name is required'
    })
    name: string;
}

@InputType()
export class UpdateCategoryInput {
    @Field(() => Int)
    id: number;
    @Field(() => String)
    name: string;
}