<template>
  <div data-route="contact">
    <h2>Contact info</h2>

    <p>
      Email: <a class="webfont" href="mailto:contact@fanestelaru.com">contact@fanestelaru.com</a>
      <br>Facebook: <a class="webfont" href="https://www.facebook.com/FaneStelaru0/" target="_blank">FaneStelaru0</a>
    </p>

    <h2>Get in touch</h2>

    <form action="https://formspree.io/contact@fanestelaru.com" method="POST">
        <input type="hidden" name="_subject" value="FaneStelaru.com Contact Form: New message" />

        <label for="fs-name">name</label>
        <input id="fs-name" type="text" name="name">

        <br>

        <label for="fs-email">email</label>
        <input id="fs-email" type="email" name="_replyto">

        <br>

        <label for="fs-message">message</label>
        <textarea name="message" cols="30" rows="10" placeholder="What's on your mind?"></textarea>

        <br>

        <button type="submit" class="contact-me webfont">SEND</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
label,
input,
textarea {
  display: block;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  background-color: transparent;
  border: 1px solid white;
  width: 200px;
  padding: 0.3em 0.5em;
  color: white;
  width: 100%;
}

input:focus,
textarea:focus {
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

.contact-me {
  border: none;
  padding: 0;
  background-color: transparent;
  color: white;
  cursor: pointer;
}
</style>
