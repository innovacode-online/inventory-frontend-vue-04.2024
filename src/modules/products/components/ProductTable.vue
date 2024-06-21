<script lang="ts" setup>
import { useProductStore } from '../stores/product.store';



const productStore = useProductStore();

</script>

<template>
    <section class="pt-8">
        <div class="table">
            <!-- COLUMNS -->
            <div class="grid grid-cols-7 text-gray-300 gap-4">
                <h3>Imagen</h3>
                <h3>Nombre</h3>
                <h3>Descripcion</h3>
                <h3>Categoria</h3>
                <h3>Stock</h3>
                <h3>Precio</h3>
                <h3>Acciones</h3>
            </div>

            <div class="divider"></div>
            
            <!-- BODY -->
            <ul>
                <!-- ROWS -->
                <li
                    v-for="product in productStore.products" :key="product.id"
                    class="grid grid-cols-7 text-gray-300 gap-4 items-center"
                >
                    <img class="max-w-[70px]" :src="product.image" :alt="product.name">
                    <p>{{ product.name }}</p>
                    <p class="line-clamp-2">{{ product.description }}</p>
                    <p>{{ product.category.name }}</p>
                    <p>{{ product.stock }}u.</p>
                    <p>{{ product.price }}$</p>
                    <div>
                        Acciones
                    </div>
                </li>
            </ul>

        </div>
    </section>    


</template>
