<template>
  <div data-component="FsEvent">
    <h2 class="title">
      Concert Fane Stelaru
    </h2>

    <p class="date">
      23 March 2018
    </p>

    <figure class="event-image">
      <a href="https://www.facebook.com/events/1784830905146793/">
        <img
          src="/events/concert-23-march.jpg"
          alt="Concert poster for Strada Hologramelor, 23rd of March event"
        >
      </a>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'FsEvent',
};
</script>

<style>
.title {
  font-weight: normal;
  font-size: 24px;
  margin: 0 0 8px;
}
.date {
  margin-top: 0;
}
.event-image {
    margin: 0;
    padding: 0;
}
.event-image img {
    max-width: 100%;
    height: auto;
}
</style>
