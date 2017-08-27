<template>
  <div data-route="soundtrack">
    <h3 class="screen-reader-text">Soundtrack</h3>

    <ul class="soundtrack__list">
      <li
        v-for="media in library"
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

  computed: {
    library () {
      return this.$root.library.filter(entry => {
        return entry.sections.indexOf('soundtrack') !== -1
      })
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
