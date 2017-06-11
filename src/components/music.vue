<template>
  <div data-route="music">
    <ul>
      <li v-for="media in mediaLibrary">
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
            album: 'lost-and-found-beats',
            id: '889554299'
          },
          {
            source: 'soundcloud',
            type: 'album',
            id: '204932019'
          },
          {
            source: 'soundcloud',
            type: 'track',
            id: '252684216'
          },
          {
            source: 'youtube',
            type: 'video',
            id: 'KRkRdoL4zoE'
          },
          {
            source: 'youtube',
            type: 'playlist',
            id: 'PLqlKMTzU8q8OtrdEFABcHBrFO5ZUyNgr-'
          }
        ]
      }
    },

    components: {
      FsMusic
    }
  }
</script>
