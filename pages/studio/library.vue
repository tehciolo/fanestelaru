<template>
  <div>
    <BTable :data="library">
      <BTableColumn
        v-slot="props"
        field="item"
        label="Item"
      >
        {{ props.row.data.name }}
      </BTableColumn>

      <BTableColumn
        v-slot="props"
        field="actions"
        label="Actions"
      >
        <NuxtLink :to="`/studio/library-item?id=${props.row.ref['@ref'].id}`">
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
          @click="deleteItem(props.row.ref['@ref'].id)"
        >
          Delete
        </BButton>
      </BTableColumn>
    </BTable>

    <hr>

    <NuxtLink to="/studio/library-item">
      Add item
    </NuxtLink>
  </div>
</template>

<script>
import { deleteItem, getAllItems } from '@/assets/js/api/index.js';

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

  methods: {
    editItem (id) {

    },

    deleteItem (id) {
      this.$buefy.dialog.confirm({
        title: 'Deleting item',
        message: 'Are you sure you want to <b>delete</b> this item?',
        confirmText: 'Delete item',
        type: 'is-danger',
        onConfirm: () => {
          deleteItem(id).then((_) => {
            this.library = this.library.filter(item => item.ref['@ref'].id !== id);
          });
        },
      });
    },
  },
};
</script>
