<template>
  <div data-route="soundtrack">
    <ul>
      <li v-for="media in mediaLibrary">
        <fs-soundtrack
          :media="media"
        ></fs-soundtrack>
      </li>
    </ul>
  </div>
</template>

<script>
import FsSoundtrack from '@/components/fs-soundtrack'

export default {
  name: 'soundtrack',

  components: {
    FsSoundtrack
  },

  data () {
    return {
      mediaLibrary: [
        {
          source: 'youtube',
          type: 'video',
          id: 'qDdmcEEKqpI'
        }
      ]
    }
  }
}
</script>
