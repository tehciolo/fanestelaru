<template>
  <section style="background-color: #ccc">
    <BField label="Name">
      <BInput v-model="form.name"></BInput>
    </BField>

    <hr>
    <p class="title is-6">
      Date
    </p>

    <BField label="Year" grouped>
      <BInput v-model="form.date.year" placeholder="Year" type="number"></BInput>
    </BField>

    <BField label="Month" grouped>
      <BSelect v-model="form.date.month" placeholder="Select a month">
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
        v-model="form.sections"
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

    <BTable :data="form.sources" :columns="columns"></BTable>

    <p class="control">
      <BButton class="button is-success" @click="save">
        Save
      </BButton>
    </p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { createItem } from '@/assets/js/api/index.js';
const MONTHS = [
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
];
const SECTIONS = [
  'commercials',
  'film',
  'records',
  'video-games',
];

function getFormInitialState () {
  return {
    name: undefined,
    date: {
      year: undefined,
      month: undefined,
    },
    sections: [],
    sources: [],
  };
}

function getSourceInitialState () {
  return {
    platform: undefined,
    id: undefined,
    slug: undefined,
    type: undefined,
    startId: undefined,

  };
}
export default {
  name: 'Library',
  data () {
    return {
      MONTHS,
      SECTIONS,
      source: getSourceInitialState(),
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
      form: getFormInitialState(),
    };
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  created () {
    if (process.browser) {
      console.log(this.user);
      if (!this.user) {
        this.$router.push('/');
        this.$toast.show('You\'ll need to login');
      }
    }
  },
  methods: {
    addSource () {
      this.form.sources.push(this.source);
      this.source = getSourceInitialState();
    },
    save () {
      const { date, name, sources, sections } = this.form;
      return createItem({ date, name, sources, sections }).then((response) => {
        this.form = getFormInitialState();
      });
    },
  },
};
</script>
