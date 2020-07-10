<template>
  <div data-route="film">
    <h3 class="screen-reader-text">
      Film
    </h3>

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
    const library = await getFilm();

    return { library };
  },
};
</script>

<style>
[data-route="film"] {
  width: 540px;
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
