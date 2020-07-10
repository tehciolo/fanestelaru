<template>
  <div data-route="video-games">
    <h1 class="screen-reader-text">
      Video Games
    </h1>

    <ul class="video__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="video__item"
      >
        <VideoItem
          :media="media"
          :extended="false"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { getVideoGames } from '@/assets/js/api';
import VideoItem from '@/components/VideoItem';

export default {
  name: 'VideoGames',

  components: {
    VideoItem,
  },

  async asyncData () {
    const library = await getVideoGames();

    return { library };
  },

  head () {
    return {
      title: 'Video Games - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Video Games' },
        { hid: 'description', name: 'description', content: 'Want to know what video games FaneStelaru has been working on? This page features some of his most recent work.' },
        { hid: 'keywords', name: 'keywords', content: 'video games, sound design' },
      ],
    };
  },
};
</script>

<style scoped>
[data-route="video-games"] {
  width: 540px;
  max-width: 100%;
  margin: 0 auto;
}

.video__list {
  padding: 0;
  margin: 0 0 1rem;
  list-style-type: none;
}
.video__item:not(:last-child) {
  margin-bottom: 4rem;
}
</style>
