import { createRouter, createWebHistory } from 'vue-router'

import AdminPanel from "../views/AdminPanel.vue"
import Home1 from "../views/Home1.vue";
import Registration from "../views/Registration.vue"
import LogIn from "../views/Login.vue";
import Create from '../views/CreateQuiz.vue'
import Name from "../views/Name.vue"
import User from "../views/User.vue"
import Leaderboard from "../views/Leaderboard.vue"
import Records from "../views/Records.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    name :"home",
    path:'/',
    component: Home1
   },
   {
    name :"name",
    path: "/name",
    component : Name
   },
   {
    name :"register",
    path: "/register",
    component:Registration,
   },
   {
    name :"login",
    path: "/login",
    component: LogIn
   },
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: AdminPanel
    },
    {
      path: '/adminpanel/record',
      name: 'record',
      component: Records
    },
    {
    name :"create",
    path:'/create',
    component: Create
    }
    ,
    {
      name:'user',
      path :'/user',
      component:User
    }
    ,{
      name :"leaderboard",
      path: "/leaderboard",
      component: Leaderboard
    }
   
  ]
})

export default router
