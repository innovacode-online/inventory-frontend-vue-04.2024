import type { ICategory } from "./category";

export interface ICreateCategoryResponse {
    message:  string;
    category: ICategory;
}
