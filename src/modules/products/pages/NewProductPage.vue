<script lang="ts" setup>
import HeaderPage from '@/modules/shared/components/HeaderPage.vue';
import NewProductForm from "@/modules/products/components/NewProductForm.vue";

</script>

<template>
    <HeaderPage
        title="Nuevo Producto"
        description="Agrega un nuevo producto a tu inventario"
        btn-title="Volver"
        path-name="products"
    />

    <NewProductForm/>

</template>
