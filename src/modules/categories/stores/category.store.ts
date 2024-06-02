import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia'

import { handleAxiosError } from '@/helpers';
import type { ICategory } from '../interfaces';
import categoryService from '../services/category.service';




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

    onMounted( async () => {
        await getAllCategories();
    })

    return {
        // STATES
        categories

        // METHODS
        
    }

});