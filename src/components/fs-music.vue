<template>
  <div data-component="fs-music">
    <iframe style="border: 0; width: 400px; height: 340px;" :src="source" seamless><a :href="link">Lost and found (beats) by Fane Stelaru</a></iframe>
  </div>  
</template>

<script>
  export default {
    name: 'fs-music',

    props: ['music'],

    computed: {
      source () {
        return `https://bandcamp.com/EmbeddedPlayer/album=${this.music.id}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/`
      },

      link () {
        return `http://fanestelaru.bandcamp.com/album/${this.music.album}`
      }
    }
  }
</script>
