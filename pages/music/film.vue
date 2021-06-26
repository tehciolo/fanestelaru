<template>
  <div data-route="film">
    <h1 class="screen-reader-text">
      Film
    </h1>

    <p style="text-align: center;">
      Coming soon&hellip;
    </p>
  </div>
</template>

<script>
export default {
  name: 'Film',

  head () {
    return {
      title: 'Film - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Film' },
        { hid: 'description', name: 'description', content: 'Coming soon...' },
        { hid: 'keywords', name: 'keywords', content: 'film, music' },
      ],
    };
  },
};
</script>
