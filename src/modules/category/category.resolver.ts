import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "./category.entities.js";
import { CreateCategoryInput, UpdateCategoryInput } from "./category.input.js";

@Resolver(Category)
export class CategoryResolver {
    // 2. Add this Query block
    @Query(() => [Category])
    async categories() {
        return await Category.find();
    }

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


    @Query(() => Category)
    async getCategoryById(@Arg("id", () => ID) id: number) {
        const category = await Category.findOneBy({ id });
        if (!category) {
            throw new Error(`Category with ID ${id} was not found in the database.`);
        }
        return category;
    }

    @Mutation(() => Category)
    async updateCategory(
        @Arg("data", () => UpdateCategoryInput) data: UpdateCategoryInput
    ) {
        const category = await Category.findOneBy({ id: data.id });
        if (!category) {
            throw new Error(`Category with ID ${data.id} was not found in the database.`);
        }
        category.name = data.name;
        await category.save();
        return category;
    }


    @Mutation(() => Category)
    async deleteCategory(@Arg("id", () => ID) id: number) {
        const category = await Category.findOneBy({ id });
        if (!category) {
            throw new Error(`Category with ID ${id} was not found in the database.`);
        }
        await category.remove();
        return category;
    }
}