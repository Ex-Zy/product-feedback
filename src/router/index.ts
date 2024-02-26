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
      name: 'feedback',
      component: () => import('@/views/FeedbackDetailView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/EditFeedbackView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/CreateFeedbackView.vue')
    }
  ]
})

export default router
