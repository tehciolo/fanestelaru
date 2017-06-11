<template>
  <div data-component="fs-video">
    <iframe
      :src="source"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>  
</template>

<script>
  export default {
    name: 'fs-video',

    props: ['media'],

    computed: {
      source () {
        return `https://www.youtube.com/embed/${this.media.id}`
      }
    }
  }
</script>
