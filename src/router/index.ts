import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/products' },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/pages/products/ProductsListPage.vue'),
    },
    {
      path: '/products/:id',
      name: 'product-details',
      component: () => import('@/pages/products/ProductDetailsPage.vue'),
      props: true,
    },
    { path: '/polls', name: 'polls', component: () => import('@/pages/Polls/PollsPage.vue') },
    { path: '/events', name: 'events', component: () => import('@/pages/Events/eventsPage.vue') },
  ],
})

export default router
