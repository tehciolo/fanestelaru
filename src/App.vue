<template>
  <div id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="200"
      shapeType="star"
      :particleSize="2"
      :lineLinked="false"
      :moveSpeed="moveSpeed"
      :hoverEffect="false"
      :clickEffect="false"
    ></vue-particles>
    <main>
        <img src="./assets/logo.png" alt="Fane Stelaru" @click="moveParticles">
        <router-view></router-view>
      </main>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      moveSpeed: 0.1
    }
  },

  methods: {
    moveParticles () {
      this.moveSpeed = 1
      setTimeout(() => {
        this.moveSpeed = 0.1
      }, 1000)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #070A3A;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

a {
  color: antiquewhite;
}

img {
  max-width: 100%;
  height: auto; 
}
</style>
