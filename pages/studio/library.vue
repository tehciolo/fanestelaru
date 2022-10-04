<template>
  <div>
    <ul>
      <li v-for="item in library" :key="item.ref['@ref'].id">
        {{ item.data.name }}
      </li>
    </ul>

    <hr>

    <NuxtLink to="/studio/library-item">
      Add item
    </NuxtLink>
  </div>
</template>

<script>
import { getAllItems } from '@/assets/js/api/index.js';

export default {
  name: 'Library',

  middleware: 'auth',

  async asyncData () {
    let library;
    try {
      library = (await getAllItems()).data;
    } catch (error) {
      throw new Error(error);
    }
    return { library };
  },
};
</script>
