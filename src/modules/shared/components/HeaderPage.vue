<script lang="ts" setup>
import { RouterLink } from 'vue-router';

defineProps<{
    title: string,
    pathName: string,
    btnTitle: string,
    description: string,
}>();



</script>

<template>
    <header class="header-page">
        <div class="container flex items-center justify-between">
            
            <!-- TITULO Y DESCRIPCION -->
            <div class="space-y-2">
                <h1 class="text-3xl font-light">{{ title }}</h1>
                <p class="font-light text-gray-300">{{ description }}</p>
            </div>

            <!-- ACCION -->
            <RouterLink :to="{ name: pathName }" class="btn btn-primary max-w-max">
                {{ btnTitle }}
            </RouterLink>
        </div>


    </header>

</template>
