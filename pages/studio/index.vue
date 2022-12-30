<template>
  <div>
    <h1 class="title is-1">
      Studio
    </h1>

    <NuxtLink to="/studio/library">
      <BButton size="is-large is-primary">
        Library
      </BButton>
    </NuxtLink>

    <NuxtLink to="/studio/pages">
      <BButton size="is-large is-secondary">
        Pages
      </BButton>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Studio',

  layout: 'studio',

  middleware: 'auth',
};
</script>
