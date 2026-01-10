// category.resolver.ts
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "./category.entities.js";
import { CategoryService } from "./category.service.js";
import { CreateCategoryInput, UpdateCategoryInput } from "./category.input.js";

@Resolver(Category)
export class CategoryResolver {
    // Initialize the service
    private categoryService = new CategoryService();

    @Query(() => [Category])
    async categories() {
        return await this.categoryService.findAll();
    }

    @Query(() => Category)
    async getCategory(@Arg("id", () => ID) id: number) {
        return await this.categoryService.findById(id);
    }

    @Mutation(() => Category)
    async createCategory(
        @Arg("data", () => CreateCategoryInput) data: CreateCategoryInput // Validation happens automatically here
    ) {
        return await this.categoryService.create(data);
    }

    @Mutation(() => Category)
    async updateCategory(@Arg("data", () => UpdateCategoryInput) data: UpdateCategoryInput) {
        return await this.categoryService.update(data);
    }

    @Mutation(() => Category)
    async deleteCategory(@Arg("id", () => ID) id: number) {
        return await this.categoryService.delete(id);
    }
}