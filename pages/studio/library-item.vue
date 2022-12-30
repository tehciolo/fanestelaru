<template>
  <section>
    <h1 class="title is-1">
      {{ form.name }}
    </h1>

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

    <BField label="Cover">
      <BInput v-model="form.cover"></BInput>
    </BField>

    <hr>
    <p class="title is-6">
      Sources
    </p>

    <BButton
      type="is-primary is-light"
      @click="isBandcampModalActive = true"
    >
      Add Bandcamp
    </BButton>

    <BandcampSource
      ref="bandcamp-source"
      v-model="isBandcampModalActive"
      @save-source="saveSource"
    />

    <BButton
      type="is-primary is-light"
      @click="isYoutubeModalActive = true"
    >
      Add Youtube
    </BButton>

    <YoutubeSource
      ref="native-source"
      v-model="isYoutubeModalActive"
      @save-source="saveSource"
    />

    <BButton
      type="is-primary is-light"
      @click="isSoundcloudModalActive = true"
    >
      Add Soundcloud
    </BButton>

    <SoundcloudSource
      ref="soundcloud-source"
      v-model="isSoundcloudModalActive"
      @save-source="saveSource"
    />

    <BButton
      type="is-primary is-light"
      @click="isNativeModalActive = true"
    >
      Add Native
    </BButton>

    <NativeSource
      ref="native-source"
      v-model="isNativeModalActive"
      @save-source="saveSource"
    />

    <BTable :data="form.sources">
      <BTableColumn
        v-for="column in columns"
        :key="column.field"
        v-slot="props"
        :field="column.field"
        :label="column.label"
      >
        {{ props.row[column.field] }}
      </BTableColumn>

      <BTableColumn
        v-slot="props"
        field="actions"
        label="Actions"
      >
        <BButton
          type="is-primary"
          size="is-small"
          icon-left="pen"
          @click="editSource(props.row.id)"
        >
          Edit
        </BButton>
        <BButton
          type="is-danger"
          size="is-small"
          icon-left="delete"
          @click="confirmDelete(props.row.id)"
        >
          Delete
        </BButton>
      </BTableColumn>
    </BTable>

    <BField label="Active">
      <BSelect v-model="form.active">
        <option :value="true">
          true
        </option>

        <option :value="false">
          false
        </option>
      </BSelect>
    </BField>

    <p class="control">
      <BButton class="button is-success" @click="save">
        Save
      </BButton>

      <NuxtLink to="/studio/library">
        <BButton class="button is-light">
          Cancel
        </BButton>
      </NuxtLink>
    </p>
  </section>
</template>

<script>
import { createItem, getItem, updateItem } from '@/assets/js/api/index.js';
import BandcampSource from '~/components/BandcampSource.vue';
import NativeSource from '~/components/NativeSource.vue';
import YoutubeSource from '~/components/YoutubeSource.vue';
import SoundcloudSource from '~/components/SoundcloudSource.vue';

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

const PLATFORMS = [
  'bandcamp',
  'youtube',
  'soundcloud',
  'native',
];

export default {
  name: 'LibraryItem',

  layout: 'studio',

  middleware: 'auth',

  components: {
    BandcampSource,
    NativeSource,
    YoutubeSource,
    SoundcloudSource,
  },

  data () {
    return {
      isBandcampModalActive: false,
      isNativeModalActive: false,
      isYoutubeModalActive: false,
      isSoundcloudModalActive: false,
      MONTHS,
      SECTIONS,
      PLATFORMS,
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
          field: 'href',
          label: 'Href',
        },
        {
          field: 'startId',
          label: 'Start ID',
        },
      ],
      form: getFormInitialState(),
    };
  },

  mounted () {
    if (this.$route.query?.id) {
      this.editItem(this.$route.query?.id);
    }
  },

  methods: {
    saveSource (sourceToSave) {
      const sourceExists = source => source.id === sourceToSave.id;

      const index = this.form.sources.findIndex(sourceExists);

      if (index === -1) {
        this.form.sources.push(sourceToSave);
      } else {
        this.form.sources.splice(index, 1, sourceToSave);
      }
    },

    editItem (id) {
      return getItem(id).then((item) => {
        this.form = {
          ...getFormInitialState(),
          ...item,
        };
        this.form.mode = 'edit';
      });
    },

    editSource (id) {
      // edit according to platform (not always bandcamp)
      const sourceToEdit = this.form.sources.find(source => source.id === id);

      switch (sourceToEdit.platform) {
        case 'bandcamp':
          this.isBandcampModalActive = true;
          this.$refs['bandcamp-source'].editSource({ ...sourceToEdit });
          break;

        case 'native':
          this.isNativeModalActive = true;
          this.$refs['native-source'].editSource({ ...sourceToEdit });
          break;

        case 'youtube':
          this.isYoutubeModalActive = true;
          this.$refs['youtube-source'].editSource({ ...sourceToEdit });
          break;

        case 'soundcloud':
          this.isSoundcloudModalActive = true;
          this.$refs['soundcloud-source'].editSource({ ...sourceToEdit });
          break;
      }
    },

    save () {
      const { date, name, sources, sections } = this.form;
      const id = this.$route.query?.id;

      return this.form.mode === 'create'
        ? createItem({
          date,
          name,
          sources,
          sections,
        }).then((_) => {
          this.$router.push({
            path: '/studio/library',
          });
        })
        : updateItem(id, {
          date,
          name,
          sources,
          sections,
        }).then((_) => {
          this.$router.push({
            path: '/studio/library',
          });
        });
    },

    removeSourceById (id) {
      this.form.sources = this.form.sources.filter((source) => {
        return source.id !== id;
      });
    },

    confirmDelete (id) {
      this.$buefy.dialog.confirm({
        title: 'Deleting source',
        message: 'Are you sure you want to <b>delete</b> this source?',
        confirmText: 'Delete source',
        type: 'is-danger',
        onConfirm: () => {
          this.removeSourceById(id);
        },
      });
    },
  },
};

function getFormInitialState () {
  return {
    mode: 'create',
    name: null,
    date: {
      year: null,
      month: null,
    },
    sections: [],
    sources: [],
    cover: null,
    active: false,
  };
}
</script>

<style>
.dialog {
  color: var(--color-cod-gray);
}
</style>
