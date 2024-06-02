<script lang="ts" setup>
import type { ICategory } from '../interfaces';
import { useCategoryStore } from '../stores/category.store';
import EditCategoryModal from "@/modules/categories/components/EditCategoryModal.vue";

defineProps<{
    category: ICategory;
}>();

const categoryStore = useCategoryStore();


</script>

<template>
    <div class="flex gap-3 items-center">

        <!-- EDIT BUTTON -->
        <EditCategoryModal
            :category="category"
        />
        <!-- DELETE BUTTON -->
        <div @click="categoryStore.deleteCategoryById(category.id)" class="btn-danger-icon">
            <i class="uil uil-trash"></i>
        </div>
        
    </div>    

</template>
