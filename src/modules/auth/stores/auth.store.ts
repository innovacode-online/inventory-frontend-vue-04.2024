import { computed, onMounted, ref } from "vue";
import { defineStore } from "pinia";

import router from "@/router";
import { handleAxiosError } from "@/helpers";

import { toast } from "vue-sonner";
import type { IUser } from "../interfaces";
import authService from "../services/auth.service";



export const useAuthStore = defineStore('auth', () => {
    const user = ref<IUser | undefined>(undefined);
    const token = ref<string | undefined>(undefined);

    const login = async (email: string, password: string) => {
        try {
            
            const response = await authService.login(email, password);

            user.value = response.user;
            token.value = response.token;
            console.log(response)
            localStorage.setItem('auth-token', response.token);
            localStorage.setItem('auth-user', JSON.stringify(response.user));

            router.push({ name: 'products' })
            toast.success('Bienvenido al sistema')



        } catch (error) {
            console.log(error);
            handleAxiosError(error);
        }

    }
    
    const logout = async () => {
        try {
            await authService.logout(token.value!);
            localStorage.removeItem('auth-token');
            localStorage.removeItem('auth-user');

            router.push('/auth/login');
        } catch (error) {
            console.log(error);
            handleAxiosError(error);
        }
    }



    return {
        user,
        token,

        username: computed( () => user.value?.name ),
        useremail: computed( () => user.value?.email ),

        // methods
        login,
        logout
    }


})