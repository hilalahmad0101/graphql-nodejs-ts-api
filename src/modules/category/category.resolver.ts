import { Arg, Mutation, Resolver } from "type-graphql";
import { Category } from "./category.entities.js";
import { CreateCategoryInput } from "./category.input.js";

@Resolver(Category)
export class CategoryResolver {
    @Mutation(() => Category)
    async createCategory(
        @Arg("data", () => CreateCategoryInput) data: CreateCategoryInput
    ) {
        // Create and Save to Database
        const category = Category.create({
            name: data.name
        });

        await category.save();
        return category;
    }

}