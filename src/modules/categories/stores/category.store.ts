import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia'

import { handleAxiosError } from '@/helpers';
import type { ICategory } from '../interfaces';
import categoryService from '../services/category.service';
import { toast } from 'vue-sonner';
import router from '@/router';




export const useCategoryStore = defineStore('category', () => {

    const categories = ref<ICategory[]>([]);
    const token = localStorage.getItem('auth-token');

    const getAllCategories = async () => {
        try {
            
            const categoriesResponse = await categoryService.find(token!)
            categories.value = categoriesResponse;

        } catch (error) {
            console.log(error);
            handleAxiosError(error);
        }


    }

    const createCategory = async (category: { name: string, description: string }, image: File) => {
        try {
            const response = await categoryService.create(category, image)
            toast.success(response.message, {
                description: "Categoria: " + response.category.name
            })

            router.push('/admin/categories');

            await getAllCategories();

        } catch (error) {
            handleAxiosError(error);
        }
    }

    const deleteCategoryById = async (id: number) => {
        try {
            
            const response = await categoryService.remove(id);
            toast.success(response);

            await getAllCategories();

        } catch (error) {
            handleAxiosError(error);
        }
    }

    const updateCategoryById = async (category: { id: number, name: string, description: string }, image: File) => { 
        try {
            
            const response = await categoryService.update( category, image);
            toast.success(response.message);
            await getAllCategories();

        } catch (error) {
            handleAxiosError(error);
        }
    }


    onMounted( async () => {
        await getAllCategories();
    })

    return {
        // STATES
        categories,

        // METHODS
        createCategory,
        deleteCategoryById,
        updateCategoryById
        
    }

});