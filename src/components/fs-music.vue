<template>
  <div data-component="fs-music">
    <component
      :is="type"
      :media="media"
    ></component>
  </div>  
</template>

<script>
  import FsBandcamp from '@/components/fs-bandcamp'
  import FsSoundcloud from '@/components/fs-soundcloud'
  import FsYoutube from '@/components/fs-youtube'

  export default {
    name: 'fs-music',

    props: ['media'],

    components: {
      FsBandcamp,
      FsSoundcloud,
      FsYoutube
    },

    computed: {
      type () {
        // builds a component name by adding the namespace to the value of the source property on the media object
        return `fs-${this.media.source}`
      }
    }
  }
</script>
