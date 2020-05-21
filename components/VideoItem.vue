<template>
  <div data-component="video-item">
    <YoutubeEmbed
      :media="media"
      :extended="extended"
    ></YoutubeEmbed>
  </div>
</template>

<script>
import YoutubeEmbed from '@/components/YoutubeEmbed';
export default {
  name: 'VideoItem',

  components: {
    YoutubeEmbed,
  },

  props: {
    media: {
      type: Object,
      required: true,
    },
  },

  data () {
    return {
      extended: true,
    };
  },
};
</script>
