<template>
  <div>
    <h1 class="title is-1">
      Library
    </h1>

    <BTable :data="items">
      <BTableColumn
        v-slot="props"
        field="item"
        label="Item"
      >
        {{ props.row.name }}
      </BTableColumn>

      <BTableColumn
        v-slot="props"
        field="actions"
        label="Actions"
      >
        <NuxtLink :to="`/studio/library-item?id=${props.row.id}`">
          <BButton
            type="is-primary"
            size="is-small"
            icon-left="pen"
          >
            Edit
          </BButton>
        </NuxtLink>

        <BButton
          type="is-danger"
          size="is-small"
          icon-left="delete"
          @click="removeItem(props.row.id)"
        >
          Delete
        </BButton>
      </BTableColumn>
    </BTable>

    <hr>

    <NuxtLink to="/studio/library-item">
      <BButton size="is-primary">
        Add item
      </BButton>
    </NuxtLink>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Library',

  layout: 'studio',

  middleware: 'auth',

  asyncData ({ store }) {
    return store.dispatch('fetchItems');
  },

  computed: {
    ...mapState(['items']),
  },

  methods: {
    ...mapActions(['deleteItem']),

    removeItem (id) {
      this.$buefy.dialog.confirm({
        title: 'Deleting item',
        message: 'Are you sure you want to <b>delete</b> this item?',
        confirmText: 'Delete item',
        type: 'is-danger',
        onConfirm: () => {
          this.deleteItem(id);
        },
      });
    },
  },
};
</script>
