export interface ICreateProduct {
    name: string,
    description: string,
    price: number | string,
    stock: number | string,
    category_id: number | string,

    image: File,
}