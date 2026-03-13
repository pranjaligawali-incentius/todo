import {createRouter ,createWebhistory } from 'vue-router'
import HomeView from '../views/StudentView.vue'
const routes=[{
    path:'/',
    name:'home',
    component:HomeView
}
]
const router=createROuter({
    history:createWebHistory(),
    routes
})

export default router