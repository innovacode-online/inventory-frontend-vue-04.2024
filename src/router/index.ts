import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue'
import RootLayout from '@/modules/shared/layouts/RootLayout.vue'
import authService from '@/modules/auth/services/auth.service'
import { handleAxiosError } from '@/helpers'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    
    // PROTECTED ROUTES
    {
      path: '/admin',
      component: RootLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'categories',
          name: 'categories',
          component: () => import('@/modules/categories/pages/CategoriesPage.vue'),
        },
        {
          path: 'products',
          name: 'products',
          // LAZY LOADING -> Carga perezosa
          component: () => import('@/modules/products/pages/ProductsPage.vue')
        },

      ]
    },

    // AUTH
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        }
      ],
    },
  ]
})


router.beforeEach(async ( to, form, next ) => {

  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);

  if( requiresAuth ){
    // VALIDAR EL TOKEN
    const token = localStorage.getItem('auth-token');

    if( !token ){
      next({ path: '/auth/login' })
      return;
    }

    try {
      const user = await authService.checkToken(token);

      localStorage.setItem('auth-token', token);
      localStorage.setItem('auth-user', JSON.stringify(user));
      
      next();
      return;
    } catch (error) {
      handleAxiosError(error);
      next({ path: '/auth/login' });
      return;
    }
  }

  next();

})




export default router
