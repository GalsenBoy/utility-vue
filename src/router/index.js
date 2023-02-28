import { createRouter, createWebHistory } from "vue-router";
import ExchangeComponent from '@/components/ExchangeComponent.vue'
import ApiSetup from "@/components/ApiSetup.vue";
import AuthComponent from "@/components/AuthComponent.vue"

const routes = [
    {
        name: 'accueil',
        path: '/',
        component: ApiSetup
    }
    ,
    {
        name: 'echange-monnaie',
        path: '/echange',
        component: ExchangeComponent
    }
    ,
    {
        name: 'authentification',
        path: '/auth',
        component: AuthComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;