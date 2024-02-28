<template>
  <div>
    <NuxtParticles id="tsparticles" :options="particleOptions" @load="onLoad" style="display: contents;" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const particleOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "#fff" } },
  particles: {
    color: { value: "#000" },
    links: { color: "#000", enable: true },
    move: { enable: true },
    number: { value: 100 },
  },
};

const onLoad = (container: any) => {
  container.pause();
  setTimeout(() => container.play(), 0);
};
</script>

<style></style>
