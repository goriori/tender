import {createRouter, createWebHistory} from 'vue-router'

const Main = () => import('@/pages/Main.vue')
const Detail = () => import('@/pages/Detail.vue')
const UI = () => import('@/pages/Ui.vue')
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
        },
        {
            path: '/tender/:id',
            name: 'tender',
            component: Detail
        },
        {
            path: '/ui',
            name: 'tender',
            component: UI
        }
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    },
})
router.beforeEach((_to, _from, next) => {
    next()
})
export default router
