<template>
  <section>
    <h1 class="title is-1">
      Pages
    </h1>

    <b-field label="Title">
      <b-input v-model="title"></b-input>
    </b-field>

    <b-field label="Slug">
      <b-input v-model="slug"></b-input>
    </b-field>

    <hr>
    <p class="title is-6">
      Meta
    </p>

    <b-field label="Name" grouped>
      <b-input v-model="meta.name" placeholder="Name" type="name"></b-input>
    </b-field>

    <b-field label="Content" grouped>
      <b-input v-model="meta.content" placeholder="Content" type="content"></b-input>
    </b-field>
    <p class="control">
      <b-button class="button is-primary">
        Add
      </b-button>
    </p>

    <b-table :data="meta" :columns="columns"></b-table>

    <p class="control">
      <b-button class="button is-success">
        Save
      </b-button>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Pages',

  layout: 'studio',

  middleware: 'auth',

  data () {
    return {
      title: '',
      slug: '',
      meta: {
        name: '',
        content: '',
      },
      columns: [
        {
          field: 'name',
          label: 'Name',
        },
        {
          field: 'content',
          label: 'Content',
        },
      ],
    };
  },
};
</script>
