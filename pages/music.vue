<template>
  <div data-route="music">
    <h2 class="screen-reader-text">
      Music
    </h2>

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
import { getMusic } from '@/assets/js/api/index.js';

export default {
  name: 'Music',

  components: {
    MusicItem,
  },

  async asyncData () {
    const library = await getMusic();
    return { library };
  },
};
</script>

<style scoped>
[data-route="music"] {
  width: calc(400px + 2rem);
}
@media (min-width: 852px) {
  [data-route="music"] {
    width: calc(800px + 2rem);
  }
}
@media (min-width: 1252px) {
  [data-route="music"] {
    width: calc(1200px + 2rem);
  }
}
.music__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.music__item {
  flex-basis: 400px;
  padding: 1.5rem 0;
}
@media (min-width: 852px) {
  .music__item {
    padding: 1.5rem;
  }
}
</style>
