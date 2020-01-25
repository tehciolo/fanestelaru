<template>
  <div data-route="events">
    <p v-if="!isAuthenticated">
      You're not authenticated yet. Maybe you want to

      <nuxt-link to="/auth/sign-in">
        sign in
      </nuxt-link>

      and see what happens?
    </p>
    <p v-else>
      Now that you're authenticated, maybe you should try going to our

      <nuxt-link to="/studio">
        super secret page
      </nuxt-link>!
    </p>

    <FsEvent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FsEvent from '@/components/FsEvent';

export default {
  name: 'Events',

  components: {
    FsEvent,
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser',
  ]),
};
</script>

<style>
</style>
