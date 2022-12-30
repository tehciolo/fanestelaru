<template>
  <div data-component="fs-youtube">
    <template v-if="extended">
      <h2 class="title" v-text="media.name"></h2>
      <p class="date" v-text="date"></p>
    </template>

    <div class="embed-container">
      <iframe
        :src="link"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <p
      v-if="extended"
      v-html="media.description"
    />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script>
export default {
  name: 'YoutubeEmbed',

  props: {
    media: {
      type: Object,
      required: true,
    },
    extended: Boolean,
  },

  computed: {
    source () {
      return this.media.sources.find((entry) => {
        return entry.platform === 'youtube';
      });
    },

    link () {
      if (this.source.type === 'playlist') {
        return `https://www.youtube.com/embed/videoseries?list=${this.source.id}`;
      } else if (this.source.type === 'video') {
        return `https://www.youtube.com/embed/${this.source.id}`;
      }

      return '';
    },

    date () {
      return `${this.media.date.month} ${this.media.date.year}`;
    },
  },
};
</script>

<style scoped>
  .title {
    font-weight: normal;
    font-size: 24px;
    margin: 0 0 8px;
    color: white;
  }

  .date {
    margin-top: 0;
  }

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
