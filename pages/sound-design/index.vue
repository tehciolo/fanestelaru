<template>
  <div data-route="index">
    <h1 class="screen-reader-text">
      Sound design
    </h1>

    <ul class="section__list webfont">
      <li class="section__item">
        <h2 class="screen-reader-text">
          Video games
        </h2>

        <nuxt-link to="/sound-design/video-games">
          video games <!-- eslint-disable-line -->
        </nuxt-link>
      </li>
      <li class="section__item">
        <h2 class="screen-reader-text">
          Film
        </h2>

        <nuxt-link to="/sound-design/film">
          film
        </nuxt-link>
      </li>
      <li class="section__item">
        <h2 class="screen-reader-text">
          Commercials
        </h2>

        <nuxt-link to="/sound-design/commercials">
          commercials
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SoundDesign',

  head () {
    return {
      title: 'Sound design - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Sound design' },
        { hid: 'description', name: 'description', content: 'This is the landing page for everything sound design related. Find out more about FaneStelaru films, commercials and video games.' },
        { hid: 'keywords', name: 'keywords', content: 'sound design, film, commercials, video games' },
      ],
    };
  },
};
</script>

<style scoped>
[data-route="index"] {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.section__list {
  margin: 0 0 4rem;
  padding: 0;
  list-style-type: none;
  width: 992px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section__item {
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 0.5rem;
}
@media screen and (min-width: 640px) {
  .section__item {
    font-size: 5vw;
  }
}
@media screen and (min-width: 1400px) {
  .section__item {
    font-size: 4.5rem;
  }
}
.section__item a {
  transition: text-shadow 0.3s ease-in-out;
  text-shadow: -0.01em -0.01em 0em var(--color-aubergine),
    -0.02em -0.02em 0em var(--color-aubergine),
    -0.03em -0.03em 0em var(--color-aubergine),
    -0.04em -0.04em 0em var(--color-aubergine),
    -0.05em -0.05em 0em var(--color-aubergine),
    -0.06em -0.06em 0em var(--color-aubergine),
    -0.07em -0.07em 0em var(--color-aubergine),
    -0.08em -0.08em 0em var(--color-aubergine),
    -0.09em -0.09em 0em var(--color-aubergine),
    -0.1em -0.1em 0em var(--color-aubergine),
    -0.11em -0.11em 0em var(--color-aubergine);
}
.section__item a:hover {
  text-shadow: -0.01em -0.01em 0em var(--color-dark-fern),
    -0.02em -0.02em 0em var(--color-dark-fern),
    -0.03em -0.03em 0em var(--color-dark-fern),
    -0.04em -0.04em 0em var(--color-dark-fern),
    -0.05em -0.05em 0em var(--color-dark-fern),
    -0.06em -0.06em 0em var(--color-dark-fern),
    -0.07em -0.07em 0em var(--color-dark-fern),
    -0.08em -0.08em 0em var(--color-dark-fern),
    -0.09em -0.09em 0em var(--color-dark-fern),
    -0.1em -0.1em 0em var(--color-dark-fern),
    -0.11em -0.11em 0em var(--color-dark-fern);
}
</style>
