import inventoryDb from "@/api/inventoryDb";
import type { ICategoriesResponse, ICreateCategoryResponse, IUpdateCategoryResponse } from "../interfaces";
import axios from "axios";



async function find(token: string) {
    try {
        const { data } = await inventoryDb.get<ICategoriesResponse>('/categories', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data.categories


    } catch (error) {
        throw error;
    }
}


async function create(category: { name: string, description: string }, image: File) {

    const token = localStorage.getItem('auth-token');

    try {
        const imageUrl = await uploadImage(image)
        const newCategory = {
            ...category,
            image: imageUrl
        }

        const { data } = await inventoryDb.post<ICreateCategoryResponse>('/categories', newCategory, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data;

    } catch (error) {
        console.log(error);
        throw error
    }


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
        console.log(error)
        throw error;
    }

}

async function remove(id: number) {
    const token = localStorage.getItem('auth-token');

    try {
        const { data } = await inventoryDb.delete<{ message: string }>(`/categories/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        return data.message;
    } catch (error) {
        console.log(error)
        throw error;
    }   
}

async function update(category: { id: number, name: string, description: string }, image: File) {
    const token = localStorage.getItem('auth-token');


    try {
        if( !image ){
        
            const { data } = await inventoryDb.put<IUpdateCategoryResponse>(`/categories/${category.id}`, {
                name: category.name,
                description: category.description,
            }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
    
            return data;
        }


        const imageUrl = await uploadImage(image)

        const updateCategory = {
            ...category,
            image: imageUrl
        }

        const { data } = await inventoryDb.put<IUpdateCategoryResponse>(`/categories/${category.id}`, updateCategory, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        return data;

    } catch (error) {
        console.log(error)
        throw error;
    }

    
    
}


export default {
    find,
    create,
    remove,
    update
}