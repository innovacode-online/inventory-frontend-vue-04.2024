<script lang="ts" setup>
import { useCategoryStore } from '../stores/category.store';
import { formatDate } from '../../../lib/format-date';


const categoryStore = useCategoryStore();

</script>

<template>
    <section class="pt-8">
        <div class="table">

            <div class="grid grid-cols-6 text-gray-300 gap-4">
                <h3>ID</h3>
                <h3>Imagen</h3>
                <h3>Nombre</h3>
                <h3>Descripcion</h3>
                <h3>Fecha de creacion</h3>
                <h3>Acciones</h3>
            </div>

            <div class="divider"></div>

            <ul class="space-y-6">
                <li v-for="category in categoryStore.categories" :key="category.id" class="grid grid-cols-6 text-gray-300 gap-4">
                    <p>{{ category.id }}</p>
                    <p>{{ category.image }}</p>
                    <p>{{ category.name }}</p>
                    <p>{{ category.description }}</p>
                    <p>{{ formatDate( category.createdAt ) }}</p>
                    <div>
                        Acciones

                    </div>
                    
                </li>

            </ul>


        </div>
    </section>
</template>
