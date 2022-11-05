<template>
  <BModal
    v-model="isModalActive"
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
              v-model.trim="rawSource"
              type="textarea"
              @input="checkSource"
            ></BInput>
          </BField>

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
export default {
  name: 'BandcampSource',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
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

        this.source.id = albumId.replace('album=', '');
      } catch (_) {
        this.invalidateForm('Expecting <iframe> [src] attribute to contain a valid URL.');
      }

      try {
        const link = parser.parseFromString(htmlDoc.body.firstChild?.firstChild?.nodeValue, 'text/html');
        const hrefAttr = link.body.firstChild?.attributes.getNamedItem('href');
        const slug = (new URL(hrefAttr.textContent)).pathname.split('/').at(-1);

        this.source.slug = slug;
      } catch (_) {
        this.invalidateForm('Something went wrong while parsing the album slug. Please check the embed code.');
      }
    },
    saveSource () {
      this.source.platform = 'bandcamp';

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
