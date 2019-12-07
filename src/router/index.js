import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Notes from '@/views/Notes.vue'
import Login from '@/views/Login.vue'
import BasicData from '@/views/BasicData.vue'
import Safe from '@/views/Safe.vue'
import Verified from '@/views/Verified.vue'
import Personal from '@/views/Personal.vue'
import NotesDetail from '@/views/NotesDetail.vue'
Vue.use(VueRouter)

const routes = [
	
  {
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
]

const router = new VueRouter({
  routes
})

export default router
