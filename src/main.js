// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    library: [
      {
        id: '0',
        name: 'MegaMirage',
        description: 'Imagine/Montaj - Octavian Catana<br>Regie - Irina Slate<br>Muzica/Text - Fane Stelaru',
        date: 'July 2017',
        sections: ['music', 'video'],
        sources: [
          {
            source: 'bandcamp',
            id: '1485838632',
            cover: 'megamirage',
            slug: 'megamirage'
          },
          {
            source: 'youtube',
            id: '3N3BAmesKgY',
            type: 'video'
          }
        ]
      },
      {
        id: '1',
        name: 'Lost cats',
        description: 'Music demo for a game about a cat looking for its way home.',
        date: 'July 2017',
        sections: ['soundtrack'],
        sources: [
          {
            source: 'youtube',
            id: 'kJlvl2kNk9s',
            type: 'video'
          }
        ]
      },
      {
        id: '2',
        name: 'Lost and found (Beats)',
        description: 'Lots of beats get lost in the process.',
        date: 'April 2017',
        sections: ['music'],
        sources: [
          {
            source: 'bandcamp',
            id: '889554299',
            cover: 'lost-and-found-beats',
            slug: 'lost-and-found-beats'
          }
        ]
      },
      {
        id: '3',
        name: 'Raul alb (Instrumentals)',
        description: '',
        date: 'December 2016',
        sections: ['music'],
        sources: [
          {
            source: 'bandcamp',
            id: '803044391',
            cover: 'r-ul-alb-instrumentals',
            slug: 'r-ul-alb-instrumentals'
          }
        ]
      },
      {
        id: '4',
        name: 'Raul alb',
        description: 'Dreams of a deep winter night',
        date: 'March 2016',
        sections: ['music'],
        sources: [
          {
            source: 'bandcamp',
            id: '612243869',
            cover: 'r-ul-alb',
            slug: 'r-ul-alb'
          },
          {
            source: 'soundcloud',
            id: '204932019',
            type: 'playlists',
            slug: 'raul-alb'
          },
          {
            source: 'youtube',
            id: 'PLqlKMTzU8q8OtrdEFABcHBrFO5ZUyNgr-',
            type: 'playlist',
            startId: '6lK6IbAIkqs'
          }
        ]
      },
      {
        id: '5',
        name: '19C0sm0s',
        description: 'Voce/Text - Fane Stelaru<br>Instrumentale - Fane Stelaru<br>Mix/Master - Fane Stelaru',
        date: 'June 2015',
        sections: ['music'],
        sources: [
          {
            source: 'bandcamp',
            id: '491435323',
            cover: '19c0sm0s',
            slug: '19c0sm0s'
          },
          {
            source: 'soundcloud',
            id: '125882171',
            type: 'playlists',
            slug: '19c0sm0s'
          },
          {
            source: 'youtube',
            id: 'PLqlKMTzU8q8OI2ii9QBr7xcqwl0rBacMI',
            type: 'playlist',
            startId: 'a-8HgSu4-_s'
          }
        ]
      },
      {
        id: '6',
        name: 'Nu toate noptile se pierd',
        description: 'Instrumental/Mix/Master: Citizen X<br>Voce/Text : Fane Stelaru<br>Coperta: Octavian Catana',
        date: 'April 2015',
        sections: ['music'],
        sources: [
          {
            source: 'bandcamp',
            id: '1126191139',
            cover: 'nu-toate-noptile-se-pierd',
            slug: 'nu-toate-noptile-se-pierd'
          },
          {
            source: 'youtube',
            id: 'PLqlKMTzU8q8MmQWx5P4SopWbgNVmQB63K',
            type: 'playlist',
            startId: 'pX9H8bElJ1g'
          }
        ]
      },
      {
        id: '7',
        name: 'Planeta MaiMultelor',
        description: 'Voce/Versuri - Fane Stelaru<br>Intrumental - Fane Stelaru & Eugen Iustin<br>Mix/Master - Eugen Iustin',
        date: 'June 2014',
        sections: ['music'],
        sources: [
          {
            source: 'bandcamp',
            id: '588405546',
            cover: 'planeta-maimultelor-2',
            slug: 'planeta-maimultelor-2'
          },
          {
            source: 'youtube',
            id: 'PLqlKMTzU8q8MmQWx5P4SopWbgNVmQB63K',
            type: 'playlist',
            startId: '0xa_Z9JQ6y0'
          }
        ]
      }
    ]
  },
  router,
  template: '<App/>',
  components: { App }
})
