import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'suggestions',
      component: () => import('../views/SuggestionsView.vue')
    }
  ]
})

export default router
