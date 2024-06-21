<script lang="ts" setup>
import HeaderPage from '@/modules/shared/components/HeaderPage.vue';
import ProductTable from "@/modules/products/components/ProductTable.vue";

</script>

<template>
    <HeaderPage
        btn-title="Agregar Producto"
        description="Gestiona los productos de tu inventario"
        title="Lista de Productos"
        path-name="new-product"
    />

    <ProductTable/>

</template>
