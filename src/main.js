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
        id: '-1',
        name: 'SamuraiJack vs Shinobi (Sound remake)',
        description: 'Soundtrack demo',
        date: {
          year: 2017,
          month: 'September'
        },
        sections: ['soundtrack'],
        sources: [
          {
            source: 'youtube',
            id: 'DOOX76ebtZk',
            type: 'video'
          }
        ]
      },
      {
        id: '0',
        name: 'Nu te recunosc',
        description: 'Theme-song-ul pentru spectacolul 3 Despartiri in regia Irina Slate',
        date: {
          year: 2017,
          month: 'August'
        },
        sections: ['soundtrack'],
        sources: [
          {
            source: 'youtube',
            id: 'KRkRdoL4zoE',
            type: 'video'
          }
        ]
      },
      {
        id: '1',
        name: 'Lost cats',
        description: 'Music demo for a game about a cat looking for its way home.',
        date: {
          year: 2017,
          month: 'July'
        },
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
        description: 'Instrumental: FaneStelaru<br>Mix/Master: FaneStelaru',
        date: {
          year: 2017,
          month: 'April'
        },
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
        name: 'MegaMirage',
        description: 'Muzica/Text: FaneStelaru<br>Imagine/Montaj: Octavian Catana<br>Regie: Irina Slate',
        date: {
          year: 2017,
          month: 'March'
        },
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
        id: '4',
        name: 'Raul alb (Instrumentals)',
        description: 'Instrumental: FaneStelaru<br>Mix/Master: FaneStelaru',
        date: {
          year: 2016,
          month: 'November'
        },
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
        id: '5',
        name: 'Raul alb',
        description: 'Text/Voce: FaneStelaru<br>Instrumental: FaneStelaru<br>Mix/Master: FaneStelaru',
        date: {
          year: 2016,
          month: 'March'
        },
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
        id: '6',
        name: '19C0sm0s',
        description: 'Text/Voce: FaneStelaru<br>Instrumental: FaneStelaru',
        date: {
          year: 2015,
          month: 'June'
        },
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
        id: '7',
        name: 'Nu toate noptile se pierd',
        description: 'Text/Voce: FaneStelaru<br>Instrumentale: Citizen X',
        date: {
          year: 2015,
          month: 'April'
        },
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
        id: '8',
        name: 'Planeta MaiMultelor',
        description: 'Text/Voce: FaneStelaru<br>Instrumentale: FaneStelaru, EugenIustin',
        date: {
          year: 2014,
          month: 'March'
        },
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
