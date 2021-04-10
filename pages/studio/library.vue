<template>
  <section>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>

    <hr>
    <p class="title is-6">
      Date
    </p>

    <b-field label="Year" grouped>
      <b-input v-model="date.year" placeholder="Year" type="year"></b-input>
    </b-field>

    <b-field label="Month" grouped>
      <b-input v-model="date.month" placeholder="Month" type="banana"></b-input>
    </b-field>
    <p class="control">
      <b-button class="button is-primary">
        Add
      </b-button>
    </p>

    <b-field label="Sections">
      <b-input v-model="sections"></b-input>
    </b-field>
    <p class="control">
      <b-button class="button is-primary">
        Add
      </b-button>
    </p>

    <hr>
    <p class="title is-6">
      Sources
    </p>
    <b-field label="Source" grouped>
      <b-input v-model="source" placeholder="Source" type="source"></b-input>
    </b-field>

    <p class="control">
      <b-button class="button is-primary">
        Add
      </b-button>
    </p>

    <b-table :data="sources" :columns="columns"></b-table>

    <p class="control">
      <b-button class="button is-success">
        Save
      </b-button>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Library',
  data () {
    return {
      name: '',
      date: {
        year: '',
        month: '',
      },
      sections: '',
      source: '',
      sources: [{
        source: 'youtube',
        id: 'PLqlKMTzU8q8ODB6_Q5h8BLdNNPh2TbCuD',
        type: 'playlist',
        startId: 'KhtSjjKt3QY',
      }],
      columns: [
        {
          field: 'source',
          label: 'Source',
        },
        {
          field: 'id',
          label: 'ID',
        },
        {
          field: 'slug',
          label: 'Slug',
        },
        {
          field: 'type',
          label: 'Type',
        },
        {
          field: 'startId',
          label: 'Start ID',
        },
      ],
    };
  },
};
</script>
