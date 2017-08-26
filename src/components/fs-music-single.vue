<template>
  <div data-component="fs-music-single">
    <fs-soundcloud
      :media="media"
    ></fs-soundcloud>
  </div>  
</template>

<script>
  import FsSoundcloud from '@/components/fs-soundcloud'

  export default {
    name: 'fs-music-single',

    props: ['media'],

    components: {
      FsSoundcloud
    }
  }
</script>
