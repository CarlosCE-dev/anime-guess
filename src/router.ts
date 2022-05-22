import { createWebHistory, createRouter } from "vue-router";

import AnimeGuess from './screens/AnimeGuess.vue'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: AnimeGuess
    },
]
  
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;