<template>
  <div data-route="video">
    <h3 class="screen-reader-text">Video</h3>

    <ul class="video__list">
      <li
        v-for="media in mediaLibrary"
        :key="media.id"
        class="video__item"
      >
        <fs-video
          :media="media"
        ></fs-video>
      </li>
    </ul>
  </div>
</template>

<script>
  import FsVideo from '@/components/fs-video'

  export default {
    name: 'video',

    data () {
      return {
        mediaLibrary: [
          {
            source: 'youtube',
            type: 'video',
            id: '3N3BAmesKgY',
            extended: true,
            title: 'MegaMirage',
            date: 'March 13, 2017',
            description: 'Imagine/Montaj - Octavian Catana<br>Regie - Irina Slate<br>Muzica/Text - Fane Stelaru'
          }
        ]
      }
    },

    components: {
      FsVideo
    }
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
