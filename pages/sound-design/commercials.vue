<template>
  <div data-route="commercials">
    <h3 class="screen-reader-text">
      Commercials
    </h3>

    <ul class="video__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="video__item"
      >
        <video controls width="540">
          <source :src="getVideoSource(media)" type="video/mp4">

          Sorry, your browser doesn't support embedded videos.
        </video>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCommercials } from '@/assets/js/api';

export default {
  name: 'Commercials',

  async asyncData () {
    const library = await getCommercials();

    return { library };
  },

  methods: {
    getVideoSource (media) {
      return media.sources.find(source => source.source === 'native').href;
    },
  },
};
</script>

<style>
[data-route="commercials"] {
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
