import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/modules/auth/layouts/AuthLayout.vue'
import RootLayout from '@/modules/shared/layouts/RootLayout.vue'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    
    // PROTECTED ROUTES
    {
      path: '/admin',
      component: RootLayout,
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

export default router
