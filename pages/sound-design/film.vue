<template>
  <div data-route="film">
    <h1 class="screen-reader-text">
      Film
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
import { getFilm } from '@/assets/js/api';
import VideoItem from '@/components/VideoItem';

export default {
  name: 'Film',

  components: {
    VideoItem,
  },

  async asyncData () {
    let library;
    try {
      library = await getFilm();
    } catch (error) {
      throw new Error(error);
    }

    return { library };
  },

  head () {
    return {
      title: 'Film - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Film' },
        { hid: 'description', name: 'description', content: 'Want to know what films FaneStelaru has been working on? This page features some of his most recent work.' },
        { hid: 'keywords', name: 'keywords', content: 'film, sound design' },
      ],
    };
  },
};
</script>

<style>
[data-route="film"] {
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
