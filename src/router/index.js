import Vue from 'vue'
import VueRouter from 'vue-router'
import EventShow from '../views/EventShow.vue'
import EventList from '../views/EventList.vue'
import EventCreate from '../views/EventCreate.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  // Catch-all for 404s
  { path: '*', component: NotFoundComponent }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
