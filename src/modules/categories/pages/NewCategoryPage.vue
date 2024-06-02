<script lang="ts" setup>
import HeaderPage from '@/modules/shared/components/HeaderPage.vue';
import NewCategoryForm from '@/modules/categories/components/NewCategoryForm.vue';

</script>

<template>
    <HeaderPage
        title="Agrega una categoria"
        description="Registra una nueva categoria"
        btn-title="Volver"
        path-name="categories"
    />

    <!-- FORMULARIO -->
    <NewCategoryForm/>

</template>
