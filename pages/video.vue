<template>
  <div data-route="video">
    <h3 class="screen-reader-text">Video</h3>

    <ul class="video__list">
      <li
        v-for="media in library"
        :key="media.id"
        class="video__item"
      >
        <!-- <fs-video
          :media="media"
        ></fs-video> -->
      </li>
    </ul>
  </div>
</template>

<script>
  // import FsVideo from '@/components/fs-video'
  export default {
    name: 'video',
    computed: {
      library () {
        return this.$root.library.filter(entry => {
          return entry.sections.indexOf('video') !== -1
        })
      }
    },
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