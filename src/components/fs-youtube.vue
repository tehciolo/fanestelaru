<template>
  <div data-component="fs-youtube">
    <template v-if="media.extended">
      <h2 v-text="media.title"></h2>
      <p v-text="media.date"></p>
    </template>

    <div class="embed-container">
      <iframe
        :src="source"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p v-if="media.extended" v-html="media.description"></p>
  </div>
</template>

<script>
export default {
  name: 'fs-youtube',

  props: ['media'],

  computed: {
    source () {
      if (this.media.type === 'playlist') {
        return `https://www.youtube.com/embed/videoseries?list=${this.media.id}`
      } else if (this.media.type === 'video') {
        return `https://www.youtube.com/embed/${this.media.id}`
      }
    }
  }
}
</script>

<style scoped>
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
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
