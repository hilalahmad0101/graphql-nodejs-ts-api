// category.service.ts
import { Category } from "./category.entities.js";
import { CreateCategoryInput, UpdateCategoryInput } from "./category.input.js";

export class CategoryService {
    async findAll() {
        return await Category.find();
    }

    async findById(id: number) {
        const category = await Category.findOneBy({ id });
        if (!category) throw new Error(`Category ${id} not found`);
        return category;
    }

    async create(data: CreateCategoryInput) {
        const category = Category.create({ name: data.name });
        return await category.save();
    }

    async update(data: UpdateCategoryInput) {
        const category = await this.findById(data.id);
        category.name = data.name;
        return await category.save();
    }

    async delete(id: number) {
        const category = await this.findById(id);
        await category.remove();
        return category;
    }
}