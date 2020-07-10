<template>
  <LayoutWrapper>
    <main>
      <nuxt />
    </main>
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from '~/components/LayoutWrapper';

export default {
  name: 'Default',

  components: {
    LayoutWrapper,
  },
};
</script>

<style>
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
</style>
