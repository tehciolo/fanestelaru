<template>
  <div data-route="video">
    <h3 class="screen-reader-text">
      Video
    </h3>

    <ul class="video__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="video__item"
      >
        {{ media.id }}
        <!-- <FsVideo
          :media="media"
        ></FsVideo> -->
      </li>
    </ul>
  </div>
</template>

<script>
// import FsVideo from '@/components/FsVideo'

export default {
  name: 'Video',

  computed: {
    library () {
      // return this.$root.library.filter((entry) => {
      //   return entry.sections.includes('video')
      // })
      return []
    }
  }
  // components: {
  //   FsVideo
  // }
}
</script>

<style>
.video__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.video__item:not(:last-child) {
  margin-bottom: 4rem;
}
</style>
