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
