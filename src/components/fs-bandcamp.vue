<template>
  <div data-component="fs-bandcamp">
    <div class="embed-container">
      <iframe
        :src="source"
        style="border: 0"
        seamless
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fs-bandcamp',

  props: ['media'],

  computed: {
    source () {
      return `https://bandcamp.com/EmbeddedPlayer/album=${this.media.id}/size=large/bgcol=ffffff/linkcol=070A3A/artwork=small/transparent=true/`
    },

    link () {
      return `http://fanestelaru.bandcamp.com/album/${this.media.album}`
    }
  }
}
</script>

<style scoped>
  .embed-container {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
    width: 540px;
    max-width: 100%;
  }

  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

