<template>
  <div data-component="fs-music">
    <h3 v-text="media.albumName" class="album-title"></h3>
    <div class="album-object">
      <div class="album-object__media">
        <a href="#" class="play-link">
          <img src="/static/img/cover.png" alt="Raul Alb">
        </a>
      </div>

      <div class="album-object__text">
        <p class="res-list__heading">Listen on:</p>
        <ul class="res-list webfont">
          <li><a href="#" class="res-list__link">Bandcamp</a></li>
          <li><a href="#" class="res-list__link">Soundcloud</a></li>
          <li><a href="#" class="res-list__link">Youtube</a></li>
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
.album-title {
  font-weight: normal;
}

.album-object {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  line-height: 1.15;
}

.album-object__media {
  flex-basis: 30%;
  flex-grow: 0;
  flex-shrink: 0;
}

.album-object__media img {
  max-width: 100%;
  height: auto;
  display: block;
}

.play-link {
  display: block;
  position: relative;
}

.play-link:hover::after {
  content: 'Play';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.album-object__text {
  margin-left: 5%;
}

.res-list__heading {
  color: #ccc;
}

.res-list {
  padding-left: 1.2rem;
}

.res-list__link:hover::after {
  content: 'x';
  display: inline-block;
  margin-left: 0.5rem;
}
</style>

