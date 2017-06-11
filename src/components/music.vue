<template>
  <div data-route="music">
    <ul>
      <li v-for="music in musics">
        <fs-music
          :music="music"
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
        musics: [
          {
            source: 'bandcamp',
            album: 'lost-and-found-beats',
            id: '889554299'
          }
        ]
      }
    },

    components: {
      FsMusic
    }
  }
</script>
