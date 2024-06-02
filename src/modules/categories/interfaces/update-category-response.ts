import type { ICategory } from "./category";

export interface IUpdateCategoryResponse {
    message:  string;
    category: ICategory;
}
