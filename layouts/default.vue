<template>
  <div class="holy-grail">
    <NuxtParticles id="tsparticles" url="/particle-options.json" @load="onLoad" style="display: contents;" />
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
const onLoad = (container: { play: () => void }) => container.play();
</script>

<style scoped>
main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: calc(1200px + 2rem);
  margin: 1rem auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

.holy-grail {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(0, 1fr);
  min-height: 100vh;
}
</style>
