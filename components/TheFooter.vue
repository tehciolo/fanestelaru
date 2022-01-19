<template>
  <div data-component="fs-footer">
    <footer class="fs-footer webfont">
      <nuxt-link to="/events">
        events
      </nuxt-link>

      <nuxt-link to="/contact">
        contact
      </nuxt-link>

      <button
        class="buy-link"
        @click.prevent="openLogin"
      >
        login
      </button>

      <nuxt-link to="/studio/library">
        studio
      </nuxt-link>

      <a
        href="https://fanestelaru.bandcamp.com/"
        class="buy-link"
        target="_blank"
      >
        buy now
      </a>

      <ul class="social__list">
        <li
          v-for="social in socialMedia"
          :key="social.name"
          class="social__item"
        >
          <a
            :href="social.link"
            target="_blank"
          >
            <svg
              :class="social.class"
              class="icon"
            >
              <use :xlink:href="`#${social.class}`" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TheFooter',

  data () {
    return {
      socialMedia: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/FaneStelaru0/',
          class: 'icon-facebook-with-circle',
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/FaneStelaru',
          class: 'twitter-with-circle',
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/fane.stelaru/',
          class: 'instagram-with-circle',
        },
        {
          name: 'youtube',
          link: 'https://www.youtube.com/user/MrDirectDambla',
          class: 'youtube-with-circle',
        },
        {
          name: 'spotify',
          link: 'https://open.spotify.com/artist/32rGJDzcofM452LSHUQlBI',
          class: 'spotify-with-circle',
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      openLogin: 'auth/openLogin',
    }),
  },
};
</script>

<style>
:root {
  --color-cod-gray: rgb(15, 15, 15);
  /* triadic color scheme */
  --color-deep-cove: rgb(7, 10, 58);
  /* primary color */
  --color-dark-fern: rgb(10, 58, 7);
  --color-aubergine: rgb(58, 7, 10);
}
.fs-footer {
  padding: 0.5em;
  text-align: center;
}

.fs-footer > * {
  display: inline-block;
  margin: 0.5rem 0;
  vertical-align: middle;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(255, 255, 255, .4);
}
::-moz-placeholder { /* Firefox 19+ */
  color: rgba(255, 255, 255, .4);
}
:-ms-input-placeholder { /* IE 10+ */
  color: rgba(255, 255, 255, .4);
}
:-moz-placeholder { /* Firefox 18- */
  color: rgba(255, 255, 255, .4);
}

.social__list {
  padding: 0;
  list-style-type: none;
}

.social__item {
  display: inline-block;
  vertical-align: top;
}

.social__item:not(:last-child) {
  margin-right: 0.5rem;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.buy-link {
  border: 1px solid currentColor;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 6px;
}

.buy-link:hover,
.buy-link:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 .8em var(--color-dark-fern);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}
</style>
