import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../views/index.vue') },
    { path: '/count_vue2', component: () => import('../views/count_vue2.vue') },
    { path: '/count_vue3', component: () => import('../views/count_vue3.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router