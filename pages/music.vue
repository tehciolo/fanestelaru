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
        {{ media.id }}
        <!-- <FsMusic
          :media="media"
        ></FsMusic> -->
      </li>
    </ul>
  </div>
</template>

<script>
// import FsMusic from '@/components/FsMusic'

export default {
  name: 'Music',

  computed: {
    library () {
      // return this.$root.library.filter((entry) => {
      //   return entry.sections.includes('music')
      // })
      return []
    }
  }
  // components: {
  //   FsMusic
  // },
}
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
