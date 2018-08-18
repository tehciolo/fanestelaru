<template>
  <div data-component="fs-footer">
    <footer class="fs-footer webfont">
      <!-- Begin MailChimp Signup Form -->
      <form class="subscriber" action="//fanestelaru.us16.list-manage.com/subscribe/post?u=37a8e560fa90ccef3effc47b5&amp;id=7618c4860c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
          <input type="email" value="" name="EMAIL" class="subscriber__input" placeholder="email address" autocomplete="off" required>

          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; width: 0; height: 0;" aria-hidden="true"><input type="text" name="b_37a8e560fa90ccef3effc47b5_7618c4860c" tabindex="-1" value="" style="position: absolute; left: -5000px; width: 0; height: 0;"></div>

          <input type="submit" value="subscribe" name="subscribe" id="mc-embedded-subscribe" class="subscriber__button">
      </form>
      <!--End mc_embed_signup-->

      &middot;

      <nuxt-link to="/events">events</nuxt-link>

      &middot;

      <nuxt-link to="/contact">contact</nuxt-link>

      &middot;

      <a href="https://fanestelaru.bandcamp.com/" class="buy-link" target="_blank">buy now</a>

      &middot;

      <ul class="social__list">
        <li
          v-for="social in socialMedia"
          :key="social.name"
          class="social__item"
        >
          <a :href="social.link" target="_blank">
            <svg
              :class="social.class"
              class="icon"
            >
                <use :xlink:href="`#${social.class}`"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data () {
    return {
      socialMedia: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/FaneStelaru0/',
          class: 'icon-facebook-with-circle'
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/FaneStelaru',
          class: 'twitter-with-circle'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/fane.stelaru/',
          class: 'instagram-with-circle'
        }
      ]
    }
  }
}
</script>

<style>
:root {
  --color-cod-gray: rgb(15, 15, 15);
  /* triadic color scheme */
  --color-deep-cove: rgb(7, 10, 58);
  /* primary color */
  --color-dark-fern: rgb(10, 58, 7);
  --color-aubergine: rgb(58, 7, 10);
}
.fs-footer {
  padding: 0.5em;
  text-align: center;
}

.fs-footer > * {
  display: inline-block;
  margin: 0.5rem 0;
  vertical-align: middle;
}

.subscriber__input {
  background-color: transparent;
  border: 1px solid white;
  width: 200px;
  padding: 0.3em 0.5em;
  color: white;
}

.subscriber__input:focus {
  outline-offset: 0;
  outline: 3px solid var(--color-dark-fern);
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
  cursor: pointer;
}

.social__list {
  padding: 0;
  list-style-type: none;
}

.social__item {
  display: inline-block;
  vertical-align: top;
}

.social__item:not(:last-child) {
  margin-right: 0.5rem;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.buy-link {
  border: 1px solid currentColor;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 6px;
}

.buy-link:hover,
.buy-link:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 .8em var(--color-dark-fern);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}
</style>