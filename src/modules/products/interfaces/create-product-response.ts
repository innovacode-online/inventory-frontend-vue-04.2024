import type { IProduct } from "./product";

export interface ICreateProductResponse {
    message: string;
    product: IProduct;
}
