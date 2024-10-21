import { createWebHistory, createRouter } from 'vue-router';

import PaymentLink from '../pages/Payment/PaymentLink.vue';

const routes = [
  { path: '/payment', component: PaymentLink }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
