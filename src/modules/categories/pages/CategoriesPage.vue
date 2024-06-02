<script lang="ts" setup>
import HeaderPage from '@/modules/shared/components/HeaderPage.vue';
import CategoryTable from "@/modules/categories/components/CategoryTable.vue";

</script>

<template>
    <HeaderPage
        btn-title="Agregar categoria"
        title="Categorias"
        description="Gestiona las categorias del inventario"
        path-name="new-category"
    />

    <CategoryTable/>


</template>
