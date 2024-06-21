<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { toast } from 'vue-sonner';

import { useCategoryStore } from '@/modules/categories/stores/category.store';
import { useProductStore } from '../stores/product.store';


const productStore = useProductStore();
const categoryStore = useCategoryStore();

const product = reactive({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category_id: '',

})

const isLoading = ref(false);

const handleSubmit = async (e: any) => {
    isLoading.value = true;

    const { image } = e.target as HTMLFormElement;

    if( Object.values( product ).includes('') ){
        toast.warning("Ocurrio un error", {
            description: "Todos los campos son obligatorios"
        })

        isLoading.value = false;
        return;
    }


    await productStore.createProduct({...product, image: image.files[0] as File});

    isLoading.value = false;

}

</script>

<template>
    <section class="pt-8">
        <form @submit.prevent="handleSubmit" class="container space-y-5 bg-dark-soft p-8">

            <h3 class="font-light text-xl">Formulario de regitro de productos</h3>
            
            <div class="form__group">
                <input
                    v-model="product.name"
                    type="text"
                    class="bg-dark-soft"
                    placeholder="Agregar un nombre al producto"
                />
            </div>

            <div class="form__group">
                <input
                    v-model="product.description"
                    type="text"
                    class="bg-dark-soft"
                    placeholder="Agregar una descripcion"
                />
            </div>

            <div class="form__group">
                <input
                    v-model="product.price"
                    type="number"
                    class="bg-dark-soft"
                    placeholder="Imgresa el precio de venta"
                    min="0"
                    step="0.01"
                />
            </div>

            <div class="form__group">
                <input
                    v-model="product.stock"
                    type="number"
                    min="0"
                    class="bg-dark-soft"
                    placeholder="Imgresa el stock disponible"
                />
            </div>

            <div>
                <label>Selecciona la categoria: </label>
                <select 
                    v-model="product.category_id"

                class="bg-transparent border border-gray-800 p-2 rounded-md w-full">
                    <option
                        class="p-3 bg-dark-soft "
                        v-for="category in categoryStore.categories" :key="category.id"
                        :value="category.id"
                        >
                        {{ category.name }}
                    </option>
                    
                </select>
            </div>

            <div class="form__group">
                <input 
                    name="image"
                    type="file"
                    class="bg-dark-soft"    
                >
            </div>

            <button
                type="submit"
                class="btn btn-primary"
                
            >
                {{ isLoading ? "Cargando..." : "Guardar Producto" }}
            </button>

        </form>
    </section>


</template>
