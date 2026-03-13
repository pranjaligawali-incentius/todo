import {createRouter ,createWebhistory } from 'vue-router'
import TODOView from '../views/TODOView.vue'
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