import { createRouter, createWebHistory } from 'vue-router'
import PortfolioHome from '@/components/portfolio/PortfolioHome.vue'
import PortfolioProfile from '@/components/portfolio/PortfolioProfile.vue'
import PortfolioSkill from '@/components/portfolio/PortfolioSkill.vue'
import PortfolioWorks from '@/components/portfolio/PortfolioWorks.vue'
import PortfolioContact from '@/components/portfolio/PortfolioContact.vue'
import NotFoundError from '@/components/NotFoundError.vue'


const routes = [
    {
        path: '/',
        name: 'portfolioHome',
        component: PortfolioHome,
    },
    {
        path: '/profile',
        name: 'portfolioProfile',
        component: PortfolioProfile,
    },
    {
        path: '/skill',
        name: 'portfolioSkill',
        component: PortfolioSkill,
    },
    {
        path: '/works',
        name: 'portfolioWorks',
        component: PortfolioWorks,
    },
    {
        path: '/contact',
        name: 'portfolioContact',
        component: PortfolioContact,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFoundError',
        component: NotFoundError,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
