<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { navMenuOptions } from '@/lib/constants';
import { useAuthStore } from '../../auth/stores/auth.store';

const authStore = useAuthStore();


</script>

<template>
    <nav class="navmenu">
        <div class="nav__container">
            <div>
                <h3 class="text-2xl">Gesty</h3>
            </div>

            <ul class="nav__menu">
                <li v-for="option in navMenuOptions" :key="option.pathName">
                    <RouterLink active-class="navmenu__link--active" class="navmenu__link" :to="{ name: option.pathName }">
                        <i :class="option.icon"></i>
                        <span>{{ option.name }}</span>
                    </RouterLink>
                </li>



            </ul>

            <div class="flex-1"></div>

            <div class="space-y-2">
                <h4 class="text-sm">{{ authStore.username }}</h4>
                <p class="text-sm">{{ authStore.useremail }}</p>
                <button @click="authStore.logout" class="text-red-500 font-light text-sm">
                    Cerrar Sesion
                </button>
            </div>

        </div>
    </nav>
</template>
