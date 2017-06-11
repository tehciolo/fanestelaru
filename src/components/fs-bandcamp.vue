<template>
  <div data-component="fs-bandcamp">
    <iframe
      :src="source"
      style="border: 0; width: 400px; height: 340px;"
      seamless
    >
      <a :href="link">Lost and found (beats) by Fane Stelaru</a>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'fs-bandcamp',

  props: ['media'],

  computed: {
    source () {
      return `https://bandcamp.com/EmbeddedPlayer/album=${this.media.id}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/`
    },

    link () {
      return `http://fanestelaru.bandcamp.com/album/${this.media.album}`
    }
  }
}
</script>
