<script lang="ts" setup>
import { RouterView } from 'vue-router';
import { Toaster } from "vue-sonner";

</script>

<template>
  <Toaster
    position="top-center"
    style="position:absolute;"
    :rich-colors="true"
  />
  <RouterView/>
</template>