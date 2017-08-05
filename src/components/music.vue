<template>
  <div data-route="music">
    <h2 class="screen-reader-text">Music</h2>

    <ul class="music__list">
      <li
        v-for="media in mediaLibrary"
        :key="media.id"
        class="music__item"
      >
        <fs-music
          :media="media"
        ></fs-music>
      </li>
    </ul>
  </div>
</template>

<script>
  import FsMusic from '@/components/fs-music'

  export default {
    name: 'music',

    data () {
      return {
        mediaLibrary: [
          {
            source: 'bandcamp',
            type: 'album',
            album: 'planeta-maimultelor-2',
            id: '588405546',
            albumName: 'Planeta Maimultelor 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus harum adipisci numquam obcaecati eveniet magni quae laudantium veritatis vitae esse!'
          },
          {
            source: 'bandcamp',
            type: 'album',
            album: '19c0sm0s',
            id: '491435323',
            albumName: '19c0sm0s',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed sapiente inventore id aliquid nobis eos, aspernatur rem aperiam?'
          },
          {
            source: 'bandcamp',
            type: 'album',
            album: 'nu-toate-noptile-se-pierd',
            id: '1126191139',
            albumName: 'Nu toate noptile se pierd',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            source: 'bandcamp',
            type: 'album',
            album: 'r-ul-alb',
            id: '612243869',
            albumName: 'Raul Alb',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore excepturi ipsam blanditiis, quas dignissimos dolore!'
          },
          {
            source: 'bandcamp',
            type: 'album',
            album: 'megamirage',
            id: '1485838632',
            albumName: 'MegaMirage',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deleniti quasi rem eius, illum sunt a iste, veritatis id magnam expedita laudantium quidem nemo quos enim sed accusantium autem eaque.'
          }
          // {
          //   source: 'bandcamp',
          //   type: 'album',
          //   album: 'lost-and-found-beats',
          //   id: '889554299'
          // }
          // {
          //   source: 'soundcloud',
          //   type: 'album',
          //   id: '204932019'
          // },
          // {
          //   source: 'soundcloud',
          //   type: 'track',
          //   id: '252684216'
          // },
          // {
          //   source: 'youtube',
          //   type: 'video',
          //   id: 'KRkRdoL4zoE'
          // },
          // {
          //   source: 'youtube',
          //   type: 'playlist',
          //   id: 'PLqlKMTzU8q8OtrdEFABcHBrFO5ZUyNgr-'
          // }
        ]
      }
    },

    components: {
      FsMusic
    },

    beforeCreate () {
      document.getElementsByTagName('html')[0].classList.add('on-music-page')
    },

    destroyed () {
      document.getElementsByTagName('html')[0].classList.remove('on-music-page')
    }
  }
</script>

<style>
.music__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.music__item {
  flex-basis: 400px;
  padding: 1rem;
}
</style>
