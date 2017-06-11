<template>
  <div data-component="fs-soundtrack">
    <component
      :is="type"
      :media="media"
    ></component>
  </div>
</template>

<script>
import FsBandcamp from '@/components/fs-bandcamp'
import FsYoutube from '@/components/fs-youtube'

export default {
  name: 'fs-soundtrack',

  props: ['media'],

  components: {
    FsBandcamp,
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
