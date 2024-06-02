<script lang="ts" setup>

import { formatDate } from '../../../lib/format-date';
import { useCategoryStore } from '../stores/category.store';
import CategoryTableActions from "@/modules/categories/components/CategoryTableActions.vue";

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
                    <div>
                        <img class="max-w-12" :src="category.image" :alt="category.name">

                    </div>
                    <p>{{ category.name }}</p>
                    <p class="line-clamp-1">{{ category.description }}</p>
                    <p>{{ formatDate( category.createdAt ) }}</p>
                    <div>
                        <CategoryTableActions
                            :category="category"
                        />
                    </div>
                    
                </li>

            </ul>


        </div>
    </section>
</template>
