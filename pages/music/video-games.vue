<template>
  <div data-route="video-games">
    <h1 class="screen-reader-text">
      Video Games
    </h1>

    <p style="text-align: center; margin: 16px 0;">
      Coming soon&hellip;
    </p>
  </div>
</template>

<script>
export default {
  name: 'VideoGames',

  head () {
    return {
      title: 'Video Games - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Video Games' },
        { hid: 'description', name: 'description', content: 'Want to know what video games FaneStelaru has been working on? This page features some of his most recent work.' },
        { hid: 'keywords', name: 'keywords', content: 'video games, music' },
      ],
    };
  },
};
</script>
