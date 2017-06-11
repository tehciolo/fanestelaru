<template>
  <div data-component="fs-video">
    <iframe width="560" height="315" :src="source" frameborder="0" allowfullscreen></iframe>
  </div>  
</template>

<script>
  export default {
    name: 'fs-video',

    props: ['video'],

    computed: {
      source () {
        return `https://www.youtube.com/embed/${this.video.id}`
      }
    }
  }
</script>
