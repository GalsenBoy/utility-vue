import { createRouter, createWebHistory } from "vue-router";
import ExchangeComponent from '@/components/ExchangeComponent.vue'
import ApiSetup from "@/components/ApiSetup.vue";

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;