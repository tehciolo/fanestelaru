import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Music from '@/components/music'
import Video from '@/components/video'
import Soundtrack from '@/components/soundtrack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/soundtrack',
      name: 'soundtrack',
      component: Soundtrack
    }
  ]
})
