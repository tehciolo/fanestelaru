<template>
  <div>
    <div id="particles" />

    <div class="fs-container">
      <TheHeader v-show="isHeaderVisible" />

      <slot />

      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader';
import TheFooter from '~/components/TheFooter';

export default {
  name: 'LayoutWrapper',

  components: {
    TheHeader,
    TheFooter,
  },

  computed: {
    isHeaderVisible () {
      return this.$route.fullPath !== '/';
    },
  },
};
</script>
