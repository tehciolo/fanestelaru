<template>
    <div data-route="intro">
        <div class="intro-buttons webfont">
            <a href="https://fanestelaru.bandcamp.com/album/strada-hologramelor" target="_blank">buy now</a>

            &middot;

            <router-link to="/media/-2">listen</router-link>
        </div>

        <figure class="intro-image">
            <a href="https://www.facebook.com/events/1784830905146793/">
                <img src="/static/img/events/concert-23-march.jpg" alt="Concert poster for Strada Hologramelor, 23rd of March event">
            </a>
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

.intro-buttons a {
  border: 1px solid currentColor;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 6px;
  display: inline-block;
  vertical-align: middle;
}

.intro-buttons a:hover,
.intro-buttons a:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 .8em var(--color-dark-fern);
}
</style>

