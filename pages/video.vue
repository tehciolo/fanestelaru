<template>
  <div data-route="video">
    <h3 class="screen-reader-text">
      Video
    </h3>

    <ul class="video__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="video__item"
      >
        <VideoItem :media="media" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getVideos } from '@/assets/js/api';
import VideoItem from '@/components/VideoItem';

export default {
  name: 'Video',

  components: {
    VideoItem,
  },

  async asyncData () {
    const library = await getVideos();

    return { library };
  },
};
</script>

<style>
.video__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.video__item:not(:last-child) {
  margin-bottom: 4rem;
}
</style>
