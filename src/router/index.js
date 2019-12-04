import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Notes from '@/views/Notes.vue'
import NotesDetail from '@/views/NotesDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
		path: 'notes',
		component: Notes
	},
	{
		path: 'notes/:id',
		component: NotesDetail
	}
	]
 }
]

const router = new VueRouter({
  routes
})

export default router
