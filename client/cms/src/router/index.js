import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Person from '../views/Person.vue'
import Student from '../views/Student.vue'
import Class from '../views/Class.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path:'/person',
    name:'Person',
    component:Person
  }, 
  {
    path:'/student',
    name:'Student',
    component:Student
  }, 
  {
    path:'/class',
    name:'Class',
    component:Class
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path =="/login"){
    next()
  }else{
    if(localStorage.getItem("token")){
      next()
    }else{
      next("/login")
    }
  }
})


export default router
