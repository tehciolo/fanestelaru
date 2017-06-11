<template>
  <div data-component="fs-soundcloud">
    <iframe
      :src="source"
      :height="playerHeight"
      width="100%"
      scrolling="no"
      frameborder="no"
    ></iframe>
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
