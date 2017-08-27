<template>
  <div data-component="fs-video">
    <fs-youtube
      :media="media"
      :extended="extended"
    ></fs-youtube>
  </div>  
</template>

<script>
  import FsYoutube from '@/components/fs-youtube'

  export default {
    name: 'fs-video',

    props: ['media'],

    data () {
      return {
        extended: true
      }
    },

    components: {
      FsYoutube
    }
  }
</script>
