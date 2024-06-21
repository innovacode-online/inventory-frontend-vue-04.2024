import type { IProductCategory } from "./product-category";

export interface IProduct {
    id:          number;
    name:        string;
    description: string;
    slug:        string;
    image:       string;
    price:       number;
    stock:       number;
    status:      number;
    category:    IProductCategory;
    createdAt:   Date;
}

