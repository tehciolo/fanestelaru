<template>
  <div data-component="music-item">
    <h4 class="album-date">
      <span v-text="media.date.year"></span>,
      <span v-text="media.date.month"></span>
    </h4>
    <h3 class="album-title" v-text="media.name"></h3>
    <div class="album-object">
      <div class="album-object__media">
        <nuxt-link :to="{ name: 'media-id', params: { id: media.id }}" class="play-link">
          <div class="square-bg" :style="`background-image: url(/img/covers/${cover}.jpg)`"></div>
        </nuxt-link>
      </div>

      <div class="album-object__text">
        <p class="res-list__heading">
          Listen on:
        </p>

        <ul class="res-list webfont">
          <li
            v-for="source in media.sources"
            :key="source.id"
          >
            <a :href="getLink(source)" class="res-list__link" target="_blank">{{ source.source }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-html="media.description"></p>
  </div>
</template>

<script>

export default {
  name: 'MusicItem',

  props: {
    media: {
      type: Object,
      required: true,
    },
  },

  computed: {
    cover () {
      return this.media.sources.find((source) => {
        return source.source === 'bandcamp';
      }).cover;
    },
  },

  methods: {
    getLink (source) {
      let link;

      switch (source.source) {
        case 'bandcamp':
          link = `https://fanestelaru.bandcamp.com/album/${source.slug}`;
          break;
        case 'soundcloud':
          if (source.type === 'playlists') {
            link = `https://soundcloud.com/stefan-tvr/sets/${source.slug}`;
          } else if (source.type === 'tracks') {
            link = `https://soundcloud.com/stefan-tvr/${source.slug}`;
          } else {
            link = `#`;
          }
          break;
        case 'youtube':
          if (source.type === 'playlist') {
            link = `https://www.youtube.com/watch?v=${source.startId}&list=${source.id}`;
          } else if (source.type === 'video') {
            link = `https://www.youtube.com/watch?v=${source.id}`;
          } else {
            link = `#`;
          }
          break;
        default:
          link = `#`;
          break;
      }

      return link;
    },
  },
};
</script>

<style>
.album-date {
  font-weight: normal;
  margin: 0;
}

.album-title {
  font-weight: normal;
  font-size: 24px;
  margin-top: 0;
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

.square-bg {
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.album-object__text {
  margin-left: 5%;
}

.res-list__heading {
  color: #ccc;
  margin-top: 0;
}

.res-list {
  padding-left: 1.2rem;
}

.res-list__link {
  display: inline-block;
  vertical-align: top;
}

.res-list__link:hover::after {
  content: '\2192';
  font-family: initial;
  display: inline-block;
  vertical-align: top;
  margin-left: 0.5rem;
}
</style>
