<template>
    <div data-route="intro">
        <div class="intro-buttons webfont">
            <button type="button" disabled>buy</button>

            &middot;

            <button type="button" disabled>listen</button>
        </div>

        <figure class="intro-image">
            <img src="/static/img/intro/stradahologramelor.jpg" alt="Album cover for StradaHologramelor">
        </figure>

        <router-link to="/index" class="go-to-index webfont">continue to website</router-link>
    </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style>
[data-route="intro"] {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.intro-image {
    margin: 0;
    padding: 0;
}

.intro-image img {
    max-width: 100%;
    height: auto;
}

.go-to-index:hover::after {
  content: '\2192';
  font-family: initial;
  display: inline-block;
  vertical-align: top;
  margin-left: 0.5rem;
}

.intro-buttons {
    margin-bottom: 1rem;
}

.intro-buttons button {
    border: 1px solid currentColor;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 6px;
    background-color: transparent;
    color: gray;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.5;
    cursor: not-allowed;
}
</style>

