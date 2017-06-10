<template>
  <div class="index">
    <ul>
      <li>
        <router-link to="/music">Music</router-link>
      </li>
      <li>
        <router-link to="/video">Video</router-link>
      </li>
      <li>
        <router-link to="/soundtrack">Soundtrack</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
</style>
