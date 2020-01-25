<template>
  <div>
    <div id="particles" />

    <div class="fs-container">
      <TheHeader />

      <main>
        <nuxt />
      </main>

      <!-- <TheFooter /> -->
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader';
// import TheFooter from '~/components/TheFooter'

export default {
  name: 'Layout',

  components: {
    TheHeader,
    // TheFooter
  },
};
</script>

<style>
/* https://github.com/tehciolo/fanestelaru/issues/11 */
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
</style>
