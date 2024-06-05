import { createWebHistory, createRouter } from 'vue-router';
import {routes} from './routes-elements.js';


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;