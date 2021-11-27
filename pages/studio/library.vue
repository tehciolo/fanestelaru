<template>
  <section style="background-color: #ccc">
    <BField label="Name">
      <BInput v-model="name"></BInput>
    </BField>

    <hr>
    <p class="title is-6">
      Date
    </p>

    <BField label="Year" grouped>
      <BInput v-model="date.year" placeholder="Year" type="number"></BInput>
    </BField>

    <BField label="Month" grouped>
      <BSelect v-model="date.month" placeholder="Select a month">
        <option
          v-for="option in MONTHS"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </BSelect>
    </BField>

    <BField label="Sections">
      <BSelect
        v-model="sections"
        multiple
        :native-size="SECTIONS.length"
      >
        <option
          v-for="option in SECTIONS"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </BSelect>
    </BField>

    <hr>
    <p class="title is-6">
      Sources
    </p>
    <BField label="Platform" grouped>
      <BInput v-model="source.platform" type="text"></BInput>
    </BField>
    <BField label="ID" grouped>
      <BInput v-model="source.id" type="text"></BInput>
    </BField>
    <BField label="Slug" grouped>
      <BInput v-model="source.slug" type="text"></BInput>
    </BField>
    <BField label="Type" grouped>
      <BInput v-model="source.type" type="text"></BInput>
    </BField>
    <BField label="Start ID" grouped>
      <BInput v-model="source.startId" type="text"></BInput>
    </BField>

    <p class="control">
      <BButton class="button is-primary" @click="addSource">
        Add
      </BButton>
    </p>

    <BTable :data="sources" :columns="columns"></BTable>

    <p class="control">
      <BButton class="button is-success">
        Save
      </BButton>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Library',
  data () {
    return {
      MONTHS: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      SECTIONS: [
        'commercials',
        'film',
        'records',
        'video-games',
      ],
      name: undefined,
      date: {
        year: undefined,
        month: undefined,
      },
      sections: [],
      source: {
        platform: undefined,
        id: undefined,
        slug: undefined,
        type: undefined,
        startId: undefined,

      },
      sources: [],
      columns: [
        {
          field: 'platform',
          label: 'Platform',
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
  methods: {
    addSource () {
      this.sources.push(this.source);
    },
    save () {

    },
  },
};
</script>
