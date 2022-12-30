<template>
  <div class="holy-grail">
    <div id="particles"></div>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import '~/assets/css/app.css';
import TheHeader from '~/components/TheHeader';
import TheFooter from '~/components/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
#particles {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  pointer-events: none;
}
</style>
