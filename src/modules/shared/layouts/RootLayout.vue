<script lang="ts" setup>
import NavMenu from '../components/NavMenu.vue';

</script>

<template>
    <main class="bg-black text-white pb-8 min-h-[100vh]">
        <NavMenu/>
        <RouterView/>
    </main>
</template>
