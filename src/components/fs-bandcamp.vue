<template>
  <div data-component="fs-bandcamp">
    <div class="embed-container">
      <iframe
        :src="link"
        style="border: 0"
        seamless
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fs-bandcamp',

  props: ['media', 'extended'],

  computed: {
    source () {
      return this.media.sources.find(entry => {
        return entry.source === 'bandcamp'
      })
    },

    link () {
      return `https://bandcamp.com/EmbeddedPlayer/album=${this.source.id}/size=large/bgcol=ffffff/linkcol=070A3A/artwork=small/transparent=true/`
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

