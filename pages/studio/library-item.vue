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

    <BButton
      type="is-primary is-light"
      @click="addBandcamp"
    >
      Add Bandcamp
    </BButton>

    <BModal
      v-model="isBandcampModalActive"
      :width="640"
      scroll="keep"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            <ol style="margin-top: 0;">
              <li>Go to the album page on bandcamp</li>
              <li>Click on share/embed (under the album cover)</li>
              <li>Click on embed this album</li>
              <li>Select the biggest style</li>
              <li>Copy what shows up in the "Embed" field and paste below</li>
            </ol>

            <BField
              :type="formValidation.isFormValid ? undefined : 'is-danger'"
              :message="formValidation.isFormValid ? undefined : formValidation.error"
            >
              <BInput
                v-model="source.raw"
                type="textarea"
                @input="checkSource"
              ></BInput>
            </BField>

            <p class="control">
              <BButton
                class="button is-primary"
                :disabled="!formValidation.isFormValid"
                @click="addBandcampSource"
              >
                Add
              </BButton>
            </p>
          </div>
        </div>
      </div>
    </BModal>

    <BButton
      type="is-primary is-light"
    >
      Add Youtube
    </BButton>

    <BButton
      type="is-primary is-light"
    >
      Add Soundcloud
    </BButton>

    <BButton
      type="is-primary is-light"
    >
      Add Native
    </BButton>

    <BField label="Platform">
      <BSelect
        v-model="source.platform"
        placeholder="Select a platform"
      >
        <option
          v-for="platform in PLATFORMS"
          :key="platform"
          :value="platform"
        >
          {{ platform }}
        </option>
      </BSelect>
    </BField>

    <div>
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
    </div>

    <p class="control">
      <BButton
        class="button is-primary"
        :disabled="!formValidation.isFormValid"
        @click="addSource"
      >
        Add
      </BButton>
    </p>

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
        {{ props.row.id }}
        <BButton
          type="is-primary"
          size="is-small"
          icon-left="pen"
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

    <p class="control">
      <BButton class="button is-success" @click="save">
        Save
      </BButton>
    </p>
  </section>
</template>

<script>
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

const PLATFORMS = [
  'bandcamp',
  'youtube',
  'soundcloud',
  'native',
];

export default {
  name: 'LibraryItem',

  middleware: 'auth',

  data () {
    return {
      isBandcampModalActive: false,
      MONTHS,
      SECTIONS,
      PLATFORMS,
      source: getSourceInitialState(),
      helpers: getHelpersInitialState(),
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
      formValidation: getFormValidationInitialState(),
    };
  },

  methods: {
    addSource () {
      if (this.source.platform === 'bandcamp') {
        this.form.sources.push({
          ...this.source,
          ...this.helpers.bandcamp,
        });
      } else {
        this.form.sources.push(this.source);
      }
      this.source = getSourceInitialState();
    },

    checkSource () {
      this.resetFormValidation();
      this.helpers = getHelpersInitialState();

      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(this.source.raw, 'text/html');

      if (htmlDoc.body.firstChild !== htmlDoc.body.lastChild) {
        this.invalidateForm('Expecting exactly ONE root element.');
      }

      if (htmlDoc.body.firstChild?.tagName !== 'IFRAME') {
        this.invalidateForm('Expecting root element to be an <iframe>.');
      }

      const srcAttr = htmlDoc.body.firstChild?.attributes.getNamedItem('src');

      if (!srcAttr) {
        this.invalidateForm('Expecting <iframe> to have a [src] attribute.');
      }

      try {
        const albumId = (new URL(srcAttr.textContent)).pathname.split('/').find(part => part.startsWith('album'));

        this.helpers.bandcamp.id = albumId.replace('album=', '');
      } catch (_) {
        this.invalidateForm('Expecting <iframe> [src] attribute to contain a valid URL.');
      }

      try {
        const link = parser.parseFromString(htmlDoc.body.firstChild?.firstChild?.nodeValue, 'text/html');
        const hrefAttr = link.body.firstChild?.attributes.getNamedItem('href');
        const slug = (new URL(hrefAttr.textContent)).pathname.split('/').at(-1);

        this.helpers.bandcamp.slug = slug;
      } catch (_) {
        this.invalidateForm('Something went wrong while parsing the album slug. Please check the embed code.');
      }
    },

    save () {
      const { date, name, sources, sections } = this.form;

      return createItem({
        date,
        name,
        sources,
        sections,
      }).then((response) => {
        this.form = getFormInitialState();
      });
    },

    resetFormValidation () {
      this.formValidation = getFormValidationInitialState();
    },

    invalidateForm (error) {
      this.formValidation.isFormValid = false;
      this.formValidation.error = error;
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

    addBandcamp () {
      this.isBandcampModalActive = true;
      this.source.platform = 'bandcamp';
    },

    addBandcampSource () {
      this.addSource();
      this.isBandcampModalActive = false;
    },
  },
};

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
    raw: '',
  };
}

function getFormValidationInitialState () {
  return {
    isFormValid: true,
    error: null,
  };
}

function getHelpersInitialState () {
  return {
    bandcamp: {
      id: undefined,
      slug: undefined,
    },
  };
}
</script>

<style>
.dialog {
  color: var(--color-cod-gray);
}
</style>
