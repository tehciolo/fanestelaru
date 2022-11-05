<template>
  <div data-component="fs-soundcloud">
    <div
      :class="{ 'embed-container--track': source.type === 'tracks', 'embed-container--album': source.type === 'playlists' }"
      class="embed-container"
    >
      <iframe
        :src="link"
        scrolling="no"
        frameborder="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoundcloudEmbed',

  props: {
    media: {
      type: Object,
      required: true,
    },
  },

  computed: {
    source () {
      return this.media.sources.find((entry) => {
        return entry.platform === 'soundcloud';
      });
    },

    link () {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${this.source.type}/${this.source.id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false`;
    },
  },
};
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
