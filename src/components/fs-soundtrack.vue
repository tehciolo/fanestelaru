<template>
  <div data-component="fs-soundtrack">
    <component
      :is="type"
      :media="media"
      :extended="extended"
    ></component>
  </div>
</template>

<script>
import FsBandcamp from '@/components/fs-bandcamp'
import FsSoundcloud from '@/components/fs-soundcloud'
import FsYoutube from '@/components/fs-youtube'

export default {
  name: 'fs-soundtrack',

  props: ['media'],

  data () {
    return {
      active: '',
      extended: true
    }
  },

  components: {
    FsBandcamp,
    FsSoundcloud,
    FsYoutube
  },

  computed: {
    type () {
      // builds a component name by adding the namespace to the active source
      return `fs-${this.active}`
    }
  },

  created () {
    this.active = this.media.sources[0].source
  }
}
</script>
