<template>
  <div data-route="records">
    <h1 class="screen-reader-text">
      Records
    </h1>

    <ul class="music__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="music__item"
      >
        <MusicItem
          :media="media"
        ></MusicItem>
      </li>
    </ul>
  </div>
</template>

<script>
import MusicItem from '@/components/MusicItem';
import { getRecords } from '@/assets/js/api/index.js';

export default {
  name: 'Records',

  components: {
    MusicItem,
  },

  async asyncData () {
    const library = await getRecords();
    return { library };
  },

  head () {
    return {
      title: 'Records - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Records' },
        { hid: 'description', name: 'description', content: 'Want to know what music FaneStelaru has been working on? This page features entries for all albums in his Discography, with listening options on various platforms.' },
        { hid: 'keywords', name: 'keywords', content: 'records, albums, music' },
      ],
    };
  },
};
</script>

<style scoped>
[data-route="records"] {
  width: calc(400px + 2rem);
  margin: 0 auto;
}
@media (min-width: 852px) {
  [data-route="records"] {
    width: calc(800px + 2rem);
  }
}
@media (min-width: 1252px) {
  [data-route="records"] {
    width: initial;
  }
}
.music__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.music__item {
  flex-basis: 340px;
  padding: 1.5rem 0;
}
@media (min-width: 852px) {
  .music__item {
    padding: 1.5rem;
  }
}
</style>
