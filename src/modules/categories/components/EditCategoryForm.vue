<script lang="ts" setup>
import { ref } from 'vue';
import type { ICategory } from '../interfaces/category';
import { useCategoryStore } from '../stores/category.store';
import { toast } from 'vue-sonner';

const props = defineProps<{
    category: ICategory
}>();

const isLoading = ref(false);
const updateCategory = { ...props.category };


const categoryStore = useCategoryStore();

const handleSubmit = (e: any) => {

    isLoading.value = true;

    const { image } = e.target as HTMLFormElement;

    if( Object.values(updateCategory).includes('') ){
        isLoading.value = false;
        
        toast.warning('Ocurrio un error', {
            description: "Todos losc campos son obligatorios"
        })

        return;
    }

    categoryStore.updateCategoryById(updateCategory, image.files[0]);

    isLoading.value = false;
}

</script>

<template>
    <form @submit.prevent="handleSubmit" class="container bg-dark-soft space-y-3">
        <h3 class="text-xl font-light">Formulario para editar una categoria</h3>

        <div class="form__group">
            <input v-model="updateCategory.name" type="text" class="bg-dark-soft" placeholder="Agrega un nombre">
        </div>

        <div class="form__group">
            <textarea v-model="updateCategory.description" class="bg-dark-soft"
                placeholder="Agrega una descripcion"></textarea>
        </div>

        <div class="form__group">
            <input name="image" type="file" class="bg-dark-soft">
        </div>

        <button type="submit" class="btn btn-primary">
            {{ isLoading ? 'Cargando...' : 'Actualizar categoria' }}
        </button>

    </form>
</template>
