import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Notes from '@/views/Notes.vue'
import Login from '@/views/Login.vue'
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
		path : 'index',
		component : Index
	},
	{
		path: '/notes',
		component: Notes
	},
	{
		path: 'notes/:id',
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
