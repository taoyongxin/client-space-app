import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< Updated upstream
import Home from '../views/Home.vue'

=======
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Notes from '@/views/Notes.vue'
import Login from '@/views/Login.vue'
<<<<<<< HEAD
=======
import BasicData from '@/views/BasicData.vue'
import Safe from '@/views/Safe.vue'
import Verified from '@/views/Verified.vue'
>>>>>>> c2b68e2d8d6eef50d48f173c741f8353d8b39118
import Personal from '@/views/Personal.vue'
import NotesDetail from '@/views/NotesDetail.vue'
>>>>>>> Stashed changes
Vue.use(VueRouter)

const routes = [
  {
<<<<<<< Updated upstream
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
=======
   path: '/nav',
   component: Nav,
   children :[
   	{
   		path : '/',
   		redirect : 'index'
   	},
	{
		path : '/index',
		component : Index
	},
	{
		path : '/personal',
<<<<<<< HEAD
		component : Personal
=======
		component : Personal,
		/* children :[
			{
				path : '/',
				redirect : 'basic'
			},
			{
				path : 'basic',
				component : BasicData
			},
			{
				path : 'safe',
				component : Safe
			},
			{
				path : 'verified',
				component : Verified
			}
		] */
>>>>>>> c2b68e2d8d6eef50d48f173c741f8353d8b39118
	},
	{
		path: '/notes',
		component: Notes
	},
	{
		path: '/notes/:id',
		component: NotesDetail
	}
	]
 },
     {
     	path: '/',
     	component: Login
     }
>>>>>>> Stashed changes
]

const router = new VueRouter({
  routes
})

export default router
