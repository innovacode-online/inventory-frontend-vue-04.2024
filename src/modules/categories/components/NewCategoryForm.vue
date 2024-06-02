<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { toast } from 'vue-sonner';
import { useCategoryStore } from '../stores/category.store';


const isLoading = ref(false);

const category = reactive({
    name: '',
    description: '',
})

const categoryStore = useCategoryStore();

const handleSubmit = (e: any) => {

    isLoading.value = true;

    const { image } = e.target as HTMLFormElement;

    if( Object.values(category).includes('') ){
        isLoading.value = false;
        
        toast.warning('Ocurrio un error', {
            description: "Todos losc campos son obligatorios"
        })

        return;
    }

    categoryStore.createCategory(category, image.files[0])

    isLoading.value = false;


}

</script>

<template>
    <section class="pt-8">
        <form  @submit.prevent="handleSubmit" class="container space-y-5 bg-dark-soft p-8">
            <h3 class="text-xl font-light">Formulario para registrar una categoria</h3>

            <div class="form__group">
                <input 
                    v-model="category.name"
                    type="text"
                    class="bg-dark-soft"
                    placeholder="Agrega un nombre"    
                >
            </div>

            <div class="form__group">
                <textarea 
                    v-model="category.description"
                    class="bg-dark-soft"
                    placeholder="Agrega una descripcion"    
                ></textarea>
            </div>

            <div class="form__group">
                <input 
                    name="image"
                    type="file"
                    class="bg-dark-soft"    
                >
            </div>

            <button type="submit" class="btn btn-primary">
                {{ isLoading ? 'Cargando' : 'Guardar categoria' }}
            </button>

        </form>
    </section>
</template>
