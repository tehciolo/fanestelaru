<template>
  <div data-route="video">
    <ul>
      <li v-for="video in videos">
        <fs-video
          :video="video"
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
        videos: [
          {
            source: 'youtube',
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
