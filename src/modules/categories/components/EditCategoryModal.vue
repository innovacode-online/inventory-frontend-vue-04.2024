<script lang="ts" setup>
import { ref } from 'vue'
import type { ICategory } from '../interfaces';

import EditCategoryForm from "@/modules/categories/components/EditCategoryForm.vue";
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

defineProps<{
    category: ICategory
}>();


const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}

function openModal() {
    isOpen.value = true
}

</script>

<template>
    <div class="flex items-center justify-center">
        <button type="button" @click="openModal" class="btn-primary-icon">
            <i class="uil uil-pen"></i>
        </button>
    </div>


    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="modal">

                            <!-- MODAL HEADER -->
                            <DialogTitle as="h3" class="text-lg font-medium leading-6">
                                Editar Categoria
                            </DialogTitle>

                            <!-- MODAL BODY -->
                            <div class="mt-2">
                                <EditCategoryForm
                                    :category="category"
                                />
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

</template>
