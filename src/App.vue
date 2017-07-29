<template>
  <div id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="200"
      shapeType="star"
      :particleSize="1"
      :lineLinked="false"
      :moveSpeed="0.2"
      :hoverEffect="false"
      :clickEffect="false"
    ></vue-particles>

    <div class="fs-container">
      <main>
        <router-view></router-view>
      </main>

      <fs-footer></fs-footer>
    </div>
  </div>
</template>

<script>
import FsFooter from '@/components/fs-footer'

export default {
  name: 'app',

  methods: {
    //
  },
  components: {
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
  --color-deep-cove: rgb(7, 10, 58); /* primary color */
  --color-dark-fern: rgb(10, 58, 7);
  --color-aubergine: rgb(58, 7, 10);
}

html {
  background-image: linear-gradient(to bottom, var(--color-cod-gray) 0%, var(--color-deep-cove) 100%);
  box-sizing: border-box;
}

html.on-home-page {
  background-image: radial-gradient(ellipse at center, var(--color-deep-cove) 0%, var(--color-cod-gray) 100%);
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: white;
}

#app {
  position: relative;
}

#particles-js {
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
}

a {
  color: white;
  text-decoration: none;
}

.webfont {
  font-family: 'Share Tech Mono', monospace;
}
</style>
