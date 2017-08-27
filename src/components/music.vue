<template>
  <div data-route="music">
    <h2 class="screen-reader-text">Music</h2>

    <ul class="music__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="music__item"
      >
        <fs-music
          :media="media"
        ></fs-music>
      </li>
    </ul>
  </div>
</template>

<script>
  import FsMusic from '@/components/fs-music'

  export default {
    name: 'music',

    computed: {
      library () {
        return this.$root.library.filter(entry => {
          return entry.sections.indexOf('music') !== -1
        })
      }
    },

    components: {
      FsMusic
    },

    beforeCreate () {
      document.getElementsByTagName('html')[0].classList.add('on-music-page')
    },

    destroyed () {
      document.getElementsByTagName('html')[0].classList.remove('on-music-page')
    }
  }
</script>

<style>
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
  padding: 1.5rem;
  /* margin-top: 1rem;
  margin-bottom: 1rem; */
}
</style>
