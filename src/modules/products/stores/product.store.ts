import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia'

import type { IProduct } from '../interfaces/product';

import productService from '../services/product.service';
import { handleAxiosError } from '../../../helpers/handle-axios-error';
import { toast } from 'vue-sonner';
import type { ICreateProduct } from '../interfaces/create-product';
import router from '@/router';



export const useProductStore = defineStore('product', () => {

    const products = ref<IProduct[]>([]);


    const getAllProducts = async () => {
        try {
            
            const response = await productService.findAll();
            products.value = response;

        } catch (error) {
            handleAxiosError(error);
        }
    }

    const createProduct = async (product: ICreateProduct) => {
        try {
        
            const response = await productService.create(product);

            toast.success("Producto creado", {
                description: response.message
            })

            await getAllProducts();
            
            router.push({ name: 'products' })

        } catch (error) {
            handleAxiosError(error);
        }
    }

    
    onMounted( async () => {
        await getAllProducts();
    })



    return {
        // STATE
        products,

        // METHODS
        createProduct,
        getAllProducts,
    }

});