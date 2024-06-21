import axios from "axios";

import inventoryDb from "@/api/inventoryDb";
import type { IProductsResponse } from "../interfaces/products-response";
import type { ICreateProductResponse } from "../interfaces/create-product-response";
import type { ICreateProduct } from "../interfaces/create-product";

const token = localStorage.getItem('auth-token');

async function findAll() {
    try {
        const { data } = await inventoryDb.get<IProductsResponse>('/products', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data.products;

    } catch (error) {
        throw error;
    }
}


async function create(product: ICreateProduct) {


    try {
        const imageUrl = await uploadImage(product.image)


        const { data } = await inventoryDb.post<ICreateProductResponse>(
            '/products',
            {
                ...product,
                image: imageUrl,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );

        return data;

    } catch (error) {
        throw error;
    }
}

async function findOne(term: string) {

}

async function update(id: string) {

}

async function remove(id: string) {

}


async function uploadImage(image: File) {
    try {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'innova_inventory');

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            formData,
        )

        return response.data.secure_url;

    } catch (error) {
        throw error;
    }

}


export default {
    findAll,
    findOne,
    create,
    remove,
    update,
}