<template>
  <div data-component="fs-soundcloud">
    <div
      :class="{ 'embed-container--track': media.type === 'track', 'embed-container--album': media.type === 'album' }"
      class="embed-container"
    >
      <iframe
        :src="source"
        scrolling="no"
        frameborder="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fs-soundcloud',

  props: ['media'],

  computed: {
    source () {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${this.mediaType}/${this.media.id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`
    },

    mediaType () {
      if (this.media.type === 'album') {
        return `playlists`
      } else if (this.media.type === 'track') {
        return `tracks`
      }
    },

    playerHeight () {
      if (this.media.type === 'album') {
        return `450`
      } else if (this.media.type === 'track') {
        return `166`
      }
    }
  }
}
</script>

<style scoped>
  .embed-container {
    position: relative;
    height: 0;
    overflow: hidden;
    width: 540px;
    max-width: 100%;
  }

  .embed-container--track {
    padding-bottom: 27.66%;
  }

  .embed-container--album {
    padding-bottom: 75%;
  }

  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
