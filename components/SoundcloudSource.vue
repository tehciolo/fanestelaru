<template>
  <BModal
    v-model="isModalActive"
    :width="640"
    scroll="keep"
  >
    <div class="card">
      <div class="card-content">
        <div class="content">
          <BField label="Type">
            <BSelect v-model="source.type">
              <option
                v-for="type in Object.values(TYPES)"
                :key="type"
                :value="type"
              >
                {{ type }}
              </option>
            </BSelect>
          </BField>

          <template v-if="source.type === TYPES.TRACKS">
            <ol style="margin-top: 0;">
              <li>Go to the tracks section on soundcloud</li>
              <li>Click on "share" button (under the chosen track)</li>
              <li>Change to the "Embed" tab</li>
              <li>Copy the contents of the "Code" field and paste below</li>
            </ol>

            <BField
              :type="formValidation.isFormValid ? undefined : 'is-danger'"
              :message="formValidation.isFormValid ? undefined : formValidation.error"
            >
              <BInput
                v-model.trim="rawSource"
                type="textarea"
                @input="checkSource"
              ></BInput>
            </BField>
          </template>

          <template v-if="source.type === TYPES.PLAYLISTS">
            <ol style="margin-top: 0;">
              <li>Go to the playlists/albums section on soundcloud</li>
              <li>Click on "share" button (under the playlist tracklist)</li>
              <li>Change to the "Embed" tab</li>
              <li>Copy the contents of the "Code" field and paste below</li>
            </ol>

            <BField
              :type="formValidation.isFormValid ? undefined : 'is-danger'"
              :message="formValidation.isFormValid ? undefined : formValidation.error"
            >
              <BInput
                v-model.trim="rawSource"
                type="textarea"
                @input="checkSource"
              ></BInput>
            </BField>
          </template>

          <p class="control">
            <BButton
              class="button is-primary"
              :disabled="!formValidation.isFormValid"
              @click="saveSource"
            >
              Save
            </BButton>
          </p>
        </div>
      </div>
    </div>
  </BModal>
</template>

<script>
const TYPES = {
  TRACKS: 'tracks',
  PLAYLISTS: 'playlists',
};

export default {
  name: 'SoundcloudSource',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      TYPES,
      isModalActive: false,
      source: getSourceInitialState(),
      formValidation: getFormValidationInitialState(),
      rawSource: '',
    };
  },

  watch: {
    value: {
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.isModalActive = val;
        }
      },
      immediate: true,
    },

    isModalActive: {
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.$emit('input', val);
        }
      },
    },
  },

  methods: {
    checkSource () {
      this.resetFormValidation();

      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(this.rawSource, 'text/html');

      if (htmlDoc.body.firstChild?.tagName !== 'IFRAME') {
        this.invalidateForm('Expecting first element to be an <iframe>.');
      }

      if (htmlDoc.body.lastChild?.tagName !== 'DIV') {
        this.invalidateForm('Expecting second element to be a <div>.');
      }

      const srcAttr = htmlDoc.body.firstChild?.attributes.getNamedItem('src');

      if (!srcAttr) {
        this.invalidateForm('Expecting <iframe> to have a [src] attribute.');
      }

      try {
        const url = new URL(srcAttr.textContent);

        const apiRawUrl = url.searchParams.get('url');
        const apiUrl = new URL(apiRawUrl);
        const [_, __, albumId] = apiUrl.pathname.split('/'); // eslint-disable-line

        this.source.id = albumId;
      } catch (_) {
        this.invalidateForm('Expecting <iframe> [src] attribute to contain a valid URL.');
      }

      try {
        const link = htmlDoc.body.lastChild?.children?.[1];
        const hrefAttr = link.attributes.getNamedItem('href');
        const slug = (new URL(hrefAttr.textContent)).pathname.split('/').at(-1);

        this.source.slug = slug;
      } catch (_) {
        this.invalidateForm('Something went wrong while parsing the album slug. Please check the embed code.');
      }
    },
    saveSource () {
      this.source.platform = 'soundcloud';

      this.$emit('save-source', this.source);

      // reset
      this.source = getSourceInitialState();
      this.rawSource = '';
      // close
      this.isModalActive = false;
    },

    editSource (sourceToEdit) {
      this.source = sourceToEdit;
    },

    resetFormValidation () {
      this.formValidation = getFormValidationInitialState();
    },

    invalidateForm (error) {
      this.formValidation.isFormValid = false;
      this.formValidation.error = error;
    },
  },
};

function getSourceInitialState () {
  return {
    platform: null,
    id: null,
    slug: null,
    type: null,
    startId: null,
    href: null,
  };
}

function getFormValidationInitialState () {
  return {
    isFormValid: true,
    error: null,
  };
}
</script>
