<template>
  <div data-route="video">
    <ul>
      <li v-for="media in mediaLibrary">
        <fs-video
          :media="media"
        ></fs-video>
      </li>
    </ul>
  </div>
</template>

<script>
  import FsVideo from '@/components/fs-video'

  export default {
    name: 'video',

    data () {
      return {
        mediaLibrary: [
          {
            source: 'youtube',
            type: 'video',
            id: '3N3BAmesKgY'
          }
        ]
      }
    },

    components: {
      FsVideo
    }
  }
</script>

<style>

</style>
