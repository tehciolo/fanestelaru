<template>
  <div data-component="fs-music-single">
    <h2 v-text="media.name"></h2>
    <p v-text="media.date"></p>

    <ul v-if="media.sources.length > 1" class="pill-list">
      <li
        v-for="source in media.sources"
        :key="source.id"
        class="pill-list__item"
      >
        <button
          @click="active = source.source"
          :class="{ 'is-active': source.source === active }"
          class="pill-list__button"
          type="button"
        >{{ source.source }}</button>
      </li>

      <li class="pill-list__item">&nbsp; &larr; switch platform</li>
    </ul>

    <component
      :is="type"
      :media="media"
      :extended="false"
    ></component>

    <p v-html="media.description"></p>
  </div>  
</template>

<script>
  import FsBandcamp from '@/components/fs-bandcamp'
  import FsSoundcloud from '@/components/fs-soundcloud'
  import FsYoutube from '@/components/fs-youtube'

  export default {
    name: 'fs-music-single',

    data () {
      return {
        active: ''
      }
    },

    computed: {
      media () {
        return this.$root.library.find(entry => {
          return entry.id === this.$route.params.id
        })
      },

      type () {
        // builds a component name by adding the namespace to the active source
        return `fs-${this.active}`
      }
    },

    components: {
      FsBandcamp,
      FsSoundcloud,
      FsYoutube
    },

    created () {
      this.active = this.media.sources[0].source
    }
  }
</script>

<style>
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
}

.pill-list__button.is-active,
.pill-list__button:hover,
.pill-list__button:active {
  background-color: white;
  color: var(--color-deep-cove);
}
</style>

