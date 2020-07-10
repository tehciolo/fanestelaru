<template>
  <div data-route="contact">
    <h1 class="screen-reader-text">
      Contact
    </h1>

    <ul>
      <li><strong>Email</strong>: <a href="mailto:contact@fanestelaru.com">contact@fanestelaru.com</a></li>
      <li><strong>Facebook</strong>: <a href="https://www.facebook.com/FaneStelaru0/" target="_blank">FaneStelaru0</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  head () {
    return {
      title: 'Contact - FaneStelaru.com',
      meta: [
        { hid: 'title', name: 'title', content: 'Contact' },
        { hid: 'description', name: 'description', content: 'Here you can find all the contact information for reaching FaneStelaru.' },
        { hid: 'keywords', name: 'keywords', content: 'contact, email, facebook' },
      ],
    };
  },
};
</script>
