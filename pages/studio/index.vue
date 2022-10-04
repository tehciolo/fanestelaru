<template>
  <div>
    <h1>Studio</h1>

    <NuxtLink to="/studio/library">
      Library
    </NuxtLink>

    <NuxtLink to="/studio/pages">
      Pages
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Studio',

  middleware: 'auth',
};
</script>
