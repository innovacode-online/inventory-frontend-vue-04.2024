<script lang="ts" setup>
import { RouterView } from 'vue-router';

</script>

<template>
    <main class="auth__layout">
        <div class="flex items-center gap-2 mb-6">
            <img class="max-w-[60px]" src="../../../assets/logo.png" alt="Gesty">
            <h1 class="text-4xl font-medium">Gesty</h1>
        </div>

        <div class="container">
            <RouterView />
        </div>
    </main>
</template>
