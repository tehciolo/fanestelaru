<template>
  <div data-component="fs-music">
    <h3 v-text="media.albumName"></h3>
    <div class="album-object">
      <div class="album-object__media">
        <img src="https://f4.bcbits.com/img/a2380694859_10.jpg" alt="Raul Alb">
      </div>

      <div class="album-object__text">
        Listen on:
        <ul class="webfont">
          <li><a href="#">Bandcamp</a></li>
          <li><a href="#">Soundcloud</a></li>
          <li><a href="#">Youtube</a></li>
        </ul>
      </div>
    </div>
    <p v-text="media.description"></p>
  </div>  
</template>

<script>

export default {
  name: 'fs-music',

  props: ['media'],

  components: {
    //
  },

  computed: {

  }
}
</script>

<style>
.album-object {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.album-object__media {
  flex-basis: 30%;
  flex-grow: 0;
  flex-shrink: 0;
}

.album-object__media img {
  max-width: 100%;
  height: auto;
}
</style>

