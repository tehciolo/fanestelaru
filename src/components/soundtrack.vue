<template>
  <div data-route="soundtrack">
    <h3 class="screen-reader-text">Soundtrack</h3>

    <ul class="soundtrack__list">
      <li
        v-for="media in mediaLibrary"
        :key="media.id"
        class="soundtrack__item"
      >
        <fs-soundtrack
          :media="media"
        ></fs-soundtrack>
      </li>
    </ul>
  </div>
</template>

<script>
import FsSoundtrack from '@/components/fs-soundtrack'

export default {
  name: 'soundtrack',

  components: {
    FsSoundtrack
  },

  data () {
    return {
      mediaLibrary: [
        {
          source: 'youtube',
          type: 'video',
          id: 'kJlvl2kNk9s',
          extended: true,
          title: 'Lost Cats',
          date: 'July 3, 2017',
          description: 'Music demo for a game about a cat looking for its way home.'
        }
      ]
    }
  }
}
</script>

<style>
.soundtrack__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.soundtrack__item:not(:last-child) {
  margin-bottom: 4rem;
}
</style>
