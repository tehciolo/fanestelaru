<template>
  <div class="holy-grail">
    <NuxtParticles id="tsparticles" :options="particleOptions" @load="onLoad" style="display: contents;" />
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts" setup>
const particleOptions = {
  fullScreen: { enable: true },
  particles: {
    color: { value: "#dedede" },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
      }
    },
    size: {
      value: { min: 0.1, max: 1.2 },
      random: true,
      anim: {
        enable: false,
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
      }
    },
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
  },
};

const onLoad = (container: any) => container.play();
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
