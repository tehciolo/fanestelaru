<template>
  <div data-component="fs-youtube">
    <iframe
      :src="source"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
    ></iframe>
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
