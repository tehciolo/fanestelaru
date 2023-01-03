<template>
  <div data-component="fs-music-single">
    <h2 class="title">
      {{ media.name }}
    </h2>

    <p class="date">
      {{ date }}
    </p>

    <ul v-if="media.sources.length > 1" class="pill-list">
      <li
        v-for="source in media.sources"
        :key="source.id"
        class="pill-list__item"
      >
        <button
          :class="{ 'is-active': source.platform === active }"
          class="pill-list__button"
          type="button"
          @click="active = source.platform"
        >
          {{ source.platform }}
        </button>
      </li>

      <li class="pill-list__item">
        &nbsp; &larr; switch platform
      </li>
    </ul>

    <component
      :is="type"
      :media="media"
      :extended="false"
    ></component>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-html="media.description"></p>
  </div>
</template>

<script>
import BandcampEmbed from '@/components/BandcampEmbed.vue';
import SoundcloudEmbed from '@/components/SoundcloudEmbed.vue';
import YoutubeEmbed from '@/components/YoutubeEmbed.vue';
import { capitalize } from '@/assets/js/utils/helpers.js';

export default {
  name: 'MusicItemPage',

  components: {
    BandcampEmbed,
    SoundcloudEmbed,
    YoutubeEmbed,
  },

  asyncData ({ store, params }) {
    return store
      .dispatch('fetchItems')
      .then(() => ({
        media: store.getters.getItemById(params.id),
      }));
  },

  data () {
    return {
      active: '',
    };
  },

  computed: {
    type () {
      // builds a component name by adding the namespace to the active source
      return `${capitalize(this.active)}Embed`;
    },

    date () {
      return `${this.media.date.month} ${this.media.date.year}`;
    },
  },

  created () {
    this.active = this.media.sources[0].platform;
  },

  head () {
    return {
      title: `${this.media.name} - FaneStelaru.com`,
      meta: [
        { hid: 'title', name: 'title', content: `${this.media.name}` },
        { hid: 'description', name: 'description', content: `Listen to ${this.media.name} on various streaming platforms.` },
        { hid: 'keywords', name: 'keywords', content: 'record, album, music' },
      ],
    };
  },
};
</script>

<style scoped>
[data-component="fs-music-single"] {
  width: 540px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
}

.title {
  font-weight: normal;
  font-size: 24px;
  margin: 0 0 8px;
  color: white;
}

.date {
  margin-top: 0;
}

.pill-list {
  padding: 0;
  margin: 0 0 1rem;
}

.pill-list__item {
  display: inline-block;
}

.pill-list__button:focus {
  outline: 0;
}

.pill-list__button {
  background-color: transparent;
  color: white;
  padding: .5rem 1rem;
  cursor: pointer;
  border: 1px solid white;
  transition: all .15s ease-in-out;
}

.pill-list__button.is-active,
.pill-list__button:hover,
.pill-list__button:active {
  background-color: white;
  color: var(--color-deep-cove);
}
</style>
