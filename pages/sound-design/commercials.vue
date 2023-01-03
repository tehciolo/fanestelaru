<template>
  <div data-route="commercials">
    <h1 class="screen-reader-text">
      Commercials
    </h1>

    <ul class="video__list">
      <li
        v-for="media in commercials"
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
import { mapGetters } from 'vuex';

export default {
  name: 'Commercials',

  asyncData ({ store }) {
    return store.dispatch('fetchItems');
  },

  computed: {
    ...mapGetters(['commercials']),
  },

  methods: {
    getVideoSource (media) {
      return media.sources.find(source => source.platform === 'native').href;
    },
  },

  head () {
    return {
      title: 'Commercials - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Commercials' },
        { hid: 'description', name: 'description', content: 'Want to know what commercials FaneStelaru has been working on? This page features some of his most recent work.' },
        { hid: 'keywords', name: 'keywords', content: 'commercials, sound design' },
      ],
    };
  },
};
</script>

<style>
[data-route="commercials"] {
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
