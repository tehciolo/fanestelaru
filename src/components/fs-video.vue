<template>
  <div data-component="fs-video">
    <fs-youtube
      :media="media"
    ></fs-youtube>
  </div>  
</template>

<script>
  import FsYoutube from '@/components/fs-youtube'

  export default {
    name: 'fs-video',

    props: ['media'],

    components: {
      FsYoutube
    }
  }
</script>
