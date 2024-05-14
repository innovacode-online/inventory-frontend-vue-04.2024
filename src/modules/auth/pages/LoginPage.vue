<script lang="ts" setup>
import { ref } from 'vue';
import { toast } from 'vue-sonner';
import { useAuthStore } from '../stores/auth.store';

const authStore = useAuthStore();

const loginForm = {
    email: '',
    password: '',
}

const isLoading = ref(false);

const handleSubmit = async () => {
    isLoading.value = true;
    
    if( Object.values( loginForm ).includes('') ){
        isLoading.value = false;
        
        toast.error("Ocurrio un error", {
            description: "Todos los campos son obligatorios"
        })
        
        return;
    }

    // ENVIAR LOS DATOS DE AUTENTICACION
    await authStore.login(loginForm.email, loginForm.password);
    
    isLoading.value = false;
}

</script>

<template>
    <section>
        <form :novalidate="true" @submit.prevent="handleSubmit" class="login__form">
            <h2 class="text-center text-3xl font-light mb-8">Iniciar Sesion</h2>
            <p class="text-gray-500 text-start text-sm mb-2">
                Utiliza tus credenciales para acceder al sistema
            </p>

            <div class="form__group mb-4">
                <input
                    v-model="loginForm.email"
                    name="email"
                    type="email"
                    class="bg-dark-soft"
                    placeholder="Correo electronico"
                >
            </div>

            <div class="form__group mb-4">
                <input 
                    v-model="loginForm.password"
                    name="password"
                    type="password"
                    class="bg-dark-soft"
                    placeholder="Contraseña"
                >
            </div>

            <button 
                :disabled="isLoading"
                class="btn btn-primary"
            >
                {{ isLoading ? "Cargando" : "Iniciar Sesion" }}
            </button>

        </form>


    </section>
</template>
