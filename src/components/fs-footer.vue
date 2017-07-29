<template>
  <footer class="fs-footer webfont">
    <router-link to="/contact">contact</router-link> &middot; <router-link to="/events">events</router-link> &middot; <input class="subscriber__input" placeholder="your@email.info" type="text"> <button type="button" class="subscriber__button">subscribe</button>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.fs-footer {
  padding: 0.5em;
  text-align: center;
}

.subscriber__input {
  background-color: transparent;
  border: 1px solid white;
  width: 200px;
  padding: 0.3em 0.5em;
  color: white;
}

.subscriber__input:focus {
  outline: 3px solid var(--color-aubergine);
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(255, 255, 255, .4);
}
::-moz-placeholder { /* Firefox 19+ */
  color: rgba(255, 255, 255, .4);
}
:-ms-input-placeholder { /* IE 10+ */
  color: rgba(255, 255, 255, .4);
}
:-moz-placeholder { /* Firefox 18- */
  color: rgba(255, 255, 255, .4);
}

.subscriber__button {
  border: none;
  padding: 0;
  background-color: transparent;
  color: white;
  font-family: inherit;
}
</style>
