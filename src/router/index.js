/* global particlesJS */

import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/intro'
import Index from '@/components/index'
import Music from '@/components/music'
import Video from '@/components/video'
import Soundtrack from '@/components/soundtrack'
import Contact from '@/components/contact'
import Events from '@/components/events'
import FsMusicSingle from '@/components/fs-music-single'
import 'particles.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/index',
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
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/media/:id',
      name: 'single',
      component: FsMusicSingle
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS()
    window['pJSDom'] = []
  }

  next()
})

router.afterEach((to, from) => {
  particlesJS.load('particles', '/static/particles.json')
})

export default router
