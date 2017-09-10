<template>
  <div id="app">
    <div id="particles"></div>
  
    <div class="fs-container">
      <fs-header v-if="!isHomePage"></fs-header>
  
      <main>
        <router-view></router-view>
      </main>
  
      <fs-footer></fs-footer>
    </div>
  </div>
</template>

<script>
import FsHeader from '@/components/fs-header'
import FsFooter from '@/components/fs-footer'

export default {
  name: 'app',

  methods: {
    //
  },

  components: {
    FsHeader,
    FsFooter
  },

  computed: {
    isHomePage () {
      return this.$route.path === `/`
    }
  }
}
</script>

<style>
:root {
  --color-cod-gray: rgb(15, 15, 15);
  /* triadic color scheme */
  --color-deep-cove: rgb(7, 10, 58);
  /* primary color */
  --color-dark-fern: rgb(10, 58, 7);
  --color-aubergine: rgb(58, 7, 10);
  font-size: 16px;
  line-height: 1.5;
}

html {
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, var(--color-cod-gray) 0%, var(--color-deep-cove) 100%);
}

html.on-home-page {
  background-image: radial-gradient(ellipse at center, var(--color-deep-cove) 0%, var(--color-cod-gray) 100%);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: white;
}

#app {
  position: relative;
}

#particles {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  z-index: 0;
}

.fs-container {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 540px;
  margin: 1rem auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

.on-home-page main {
  width: initial;
}

.on-music-page main {
  width: calc(400px + 2rem);
}

@media (min-width: 852px) {
  .on-music-page main {
    width: calc(800px + 2rem);
  }
}

@media (min-width: 1252px) {
  .on-music-page main {
    width: calc(1200px + 2rem);
  }
}

h1 {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}

.webfont {
  font-family: 'Share Tech Mono', monospace;
}

.screen-reader-text {
  border: 0;
  clip: rect( 1px, 1px, 1px, 1px);
  clip-path: inset( 50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal;
}

.scaling-svg-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 95.75%;
  /* override this inline for aspect ratio other than square */
}

.scaling-svg-container svg {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
