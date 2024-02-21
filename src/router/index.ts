import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'suggestions',
      component: () => import('@/views/SuggestionsView.vue')
    },
    {
      path: '/feedback/:id',
      name: 'detail',
      component: () => import('@/views/FeedbackDetailView.vue')
    }
  ]
})

export default router
